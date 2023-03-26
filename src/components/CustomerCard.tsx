import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addFoodToCustomer, removeCustomer} from "../feature/customerSlice";
import MenuInTable from "./MenuInTable";

interface CustomerCardType {
    id: string;
    name: string;
    food: string[];
    index: number;
}

function CustomerCard({id, name, food, index}: CustomerCardType) {
    const [customerFoodInput, setCustomerFoodInput] = useState("");
    const dispatch = useDispatch();
    return (
        <div className="customer-food-card-container">
            <div className="customer-food-card-container__client-info">
                <h5>{name}</h5>
                <button
                    onClick={() => {
                        dispatch(removeCustomer(index));
                    }}
                >
                    Remove Customer
                </button>
            </div>
            <div className="customer-foods-container">
                <div className="customer-food-input-container">
                    <select
                        value={customerFoodInput}
                        onChange={(e) => setCustomerFoodInput(e.target.value)}
                    >
                        <MenuInTable/>
                    </select>
                    {/*<input*/}
                    {/*  value={customerFoodInput}*/}
                    {/*  onChange={(e) => setCustomerFoodInput(e.target.value)}*/}
                    {/*/>*/}
                    <button
                        onClick={() => {
                            dispatch(
                                addFoodToCustomer({
                                    id,
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
                    return <p>{food}</p>;
                })}
            </div>
        </div>
    );
}

export default CustomerCard;
