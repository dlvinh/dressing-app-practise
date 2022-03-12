import { combineReducers } from "redux";
import { appStateReducer } from "./appStateReducer";

export const rootReducer = combineReducers({
    appStateReducer: appStateReducer
})