import React from "react";
import {useDispatch} from "react-redux";
import {addCustomer} from "../feature/customerSlice";
import {removeReservation} from "../feature/reservationsSlice";
import {v4 as uuid} from "uuid";

interface ReservationCardType {
    name: string;
    index: number;
}

function ReservationCard({name, index}: ReservationCardType) {
    const dispatch = useDispatch();
    return (
        <div
            className="reservation-card-container"
            onClick={() => {
                dispatch(removeReservation(index));
                dispatch(
                    addCustomer({
                        id: uuid(),
                        name,
                        food: [],
                    })
                );
            }}
        >
            <p key={index}>{name}</p>
        </div>
    );
}

export default ReservationCard;