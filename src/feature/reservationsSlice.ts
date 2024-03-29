import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface ReservationsSingleState {
    name: string,
    count: number
}

export interface ReservationsState {
    value: ReservationsSingleState[]
}

const initialState: ReservationsState = {
    value: [],
};
export const reservationsSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addReservation: (state, action) => {
            state.value.push(action.payload);
        },
        removeReservation: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        },
    },
});

export const {addReservation, removeReservation} = reservationsSlice.actions;

export default reservationsSlice.reducer;