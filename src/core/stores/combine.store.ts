import { combineReducers } from "@reduxjs/toolkit";
import { catStore } from "./cat.store";

export const rootReducer = combineReducers({
    catReducer : catStore
})