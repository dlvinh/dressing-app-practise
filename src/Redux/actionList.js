import { TRY_TYPE } from "./actionType"

export const tryClothAction=(tabPane)=>{
    return {
        type: TRY_TYPE,
        tabPane: tabPane,
    }
}