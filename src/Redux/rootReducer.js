import { combineReducers } from "redux";
import { appStateReducer } from "./appStateReducer";
import { modelStateReducer } from "./modelStatetReducer";

export const rootReducer = combineReducers({
    appStateReducer: appStateReducer,
    modelStateReducer: modelStateReducer
})