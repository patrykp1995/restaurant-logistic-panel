import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addFoodToCustomer, AddFoodToCustomerPayload, removeCustomer} from "../feature/customerSlice";
import MenuInTable from "./MenuInTable";
import {Link} from "react-router-dom";

interface CustomerCardType {
    id: string;
    name: string;
    food: AddFoodToCustomerPayload[];
    index: number;
    count: number;
}

function sumPricesFromSpans() {
    const spanElements = Array.from(document.getElementsByClassName("price"));

    const prices = spanElements.map((span) => {
        const priceString = span.innerHTML.trim().replace("$", "").replace(" ", "");
        return parseFloat(priceString);
    });

    const sum = prices.reduce((acc, price) => acc + price, 0);

    return sum;
}

function CustomerCard({id, name, food, index, count}: CustomerCardType) {
    const [customerFoodInput, setCustomerFoodInput] = useState("");
    const [foodPrice, setFoodPrice] = useState(0)
    const dispatch = useDispatch();

    const totalPrice = sumPricesFromSpans();
    console.log('foodList', food)
    return (
        <div className="customer-food-card-container">
            <div className="customer-food-card-container__client-info">
                <div className="customer-food-card-container__header">
                    <h5>{name}</h5>
                    Total Price: {totalPrice.toFixed(2)}$$
                </div>
                <p>Ilość osób: {count}</p>
                <button
                    onClick={() => {
                        dispatch(removeCustomer(index));
                    }}
                >
                    Remove Customer
                </button>
                <Link to="/summarySingle">
                    <button>
                        Summary of the table
                    </button>
                </Link>
            </div>
            <div className="customer-foods-container">
                <div className="customer-food-input-container">
                    <select
                        id="customerSelect"
                        value={customerFoodInput}
                        onChange={(e) => {
                            setCustomerFoodInput(e.target.value);
                            setFoodPrice(e.target.options[e.target.selectedIndex].dataset.price);
                            console.log(foodPrice)
                        }
                        }
                    >
                        <MenuInTable/>
                    </select>
                    <button
                        onClick={() => {
                            sumPricesFromSpans();
                            dispatch(
                                addFoodToCustomer({
                                    id,
                                    price: foodPrice,
                                    food: customerFoodInput,
                                })
                            );
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className="customer-food">
                {food.map((food) => {
                    return (
                        <div className="customer-food--order">
                            <h5>{food.food}</h5>
                            <span className="price">{food.price} $$</span>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default CustomerCard;
