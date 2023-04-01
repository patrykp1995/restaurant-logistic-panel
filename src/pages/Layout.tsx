import React, {useState, useRef} from "react";
import '../assets/app.scss';
import {useSelector, useDispatch} from "react-redux";
import {addReservation} from "../feature/reservationsSlice";
// @ts-ignore
import {RootState} from "./app/store";
import ReservationCard from "../components/ReservationCard";
import CustomerCard from "../components/CustomerCard";

function Layout() {
    const dispatch = useDispatch();
    const [reservationNameInput, setReservationNameInput] = useState("");
    const [reservationCountInput, setReservationCountInput] = useState(1)
    const [reservationNameError, setReservationNameError] = useState("");
    const reservations = useSelector(
        (state: RootState) => state.reservations.value
    );
    const customers = useSelector((state: RootState) => state.customer.value);
    const handleAddReservations = () => {
        if (!reservationNameInput.length) {
            setReservationNameError("Podaj nazwisko osoby rezerwującej");
            return;
        }
        dispatch(addReservation({
            name: reservationNameInput,
            count: reservationCountInput
        }));
        setReservationNameInput("");
        setReservationNameError("");
    };
    return (
        <div className="container">

            <h1>Restaurant Logistic System</h1>
            <div className="containerBox">
                <div className="reservation-container">
                    <div>
                        <h5 className="reservation-header">Reservations</h5>
                        <div className="reservation-cards-container">
                            {!reservations.length && <h4>List is Empty</h4>}
                            {reservations.map((reservation, index) => {
                                return (
                                    <ReservationCard name={reservation.name} count={reservation.count} key={index}
                                                     index={index}/>
                                );
                            })}
                        </div>
                    </div>
                    <div className="reservation-input-container">
                        <div className="reservation-input-container__addClient">
                            <input
                                value={reservationNameInput}
                                placeholder="Surname..."
                                onChange={(e) => {
                                    setReservationNameInput(e.target.value);
                                }}
                            />
                            <input placeholder="Reserervation Count"
                                   type="number"
                                   min="1"
                                   value={reservationCountInput}
                                   onChange={e => setReservationCountInput(parseInt(e.target.value))}
                            />
                            <button onClick={handleAddReservations}>Add</button>
                        </div>
                        <p className="error">{reservationNameError}</p>
                    </div>
                </div>
                <div className="customer-food-container">
                    {!customers.length && <h3 className="customer-header">No Client</h3>}
                    {customers.map((customer, index) => {
                        return (
                            <CustomerCard
                                id={customer.id}
                                name={customer.name}
                                food={customer.food}
                                key={customer.id}
                                count={customer.count}
                                index={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Layout;
