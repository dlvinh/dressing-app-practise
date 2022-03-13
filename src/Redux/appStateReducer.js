import data from '../Data/Data.json'
const inital_state = data;

export const appStateReducer = (state= inital_state,action)=>{
    switch(action){

        default: return {...state};
    }
}