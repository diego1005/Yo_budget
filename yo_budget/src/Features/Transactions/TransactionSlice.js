//Here goes the functions for the state

import { createSlice } from "@reduxjs/toolkit";
import { addOperation, editOperation } from "../../Services/Operation/forOperation";

export const transactionSlice = createSlice({
    name: "transactions",
    initialState: [],
    reducers: {
        addTransaction: (state, action) => {
            state.push(action.payload);
            const data = addOperation(state);
            console.log(data);
        }
    }
})

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;