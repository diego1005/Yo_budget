import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../Features/Transactions/TransactionSlice";

export const store = configureStore({
    reducer: {
        transactions: transactionReducer
    }
})