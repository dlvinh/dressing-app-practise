import { TRY_TYPE } from "./actionType";

const initial_model = {
    hairstyle:"",
    necklace:"",
    bikinitop:"",
    bikinibottom:"",
    handbag:"",
    feet:"../assets/images/shoes/shoes1.png",
    background:"./assets/images/background/background1.jpg",
}

export const modelStateReducer = (state= initial_model, action)=>{
    switch(action.type){
        case TRY_TYPE:{
           // console.log(action.tabPane);
            //let newModel = {...state};
            switch(action.tabPane.type){
                case "topclothes": return {...state, bikinitop: action.tabPane.imgSrc_png};
                case "botclothes": return {...state, bikinibottom: action.tabPane.imgSrc_png};
                case "shoes": return {...state, feet: action.tabPane.imgSrc_png};
                case "handbags": return {...state, handbag: action.tabPane.imgSrc_png};
                case "necklaces": return {...state, necklace: action.tabPane.imgSrc_png};
                case "hairstyle": return {...state, hairstyle:action.tabPane.imgSrc_png};
                case "background":  return {...state, background:action.tabPane.imgSrc_png};
                default: return {...state};
            }
        }
        default: return {...state};
    }
}