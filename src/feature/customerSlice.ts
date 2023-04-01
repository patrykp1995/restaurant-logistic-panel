import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Customer {
    id: string;
    name: string;
    food: string[];
    count: number;
}

interface AddFoodToCustomerPayload {
    food: string;
    id: string;
    price: number;
}

export interface CustomerState {
    value: Customer[];
}

const initialState: CustomerState = {
    value: [],
};

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload);
        },
        removeCustomer: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        },
        addFoodToCustomer: (
            state,
            action: PayloadAction<AddFoodToCustomerPayload>
        ) => {
            state.value.forEach((customer) => {
                if (customer.id === action.payload.id) {
                    customer.food.push(action.payload.food);
                }
            });
        },
    },
});

export const {addCustomer, addFoodToCustomer, removeCustomer} = customerSlice.actions;

export default customerSlice.reducer;