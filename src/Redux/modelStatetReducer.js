const initial_model = {
    hairstyle:"",
    necklace:"",
    bikinitop:"",
    bikinibottom:"",
    handbag:"",
    feet:"",
    background:"",
}

export const modelStateReducer = (state= initial_model, action)=>{
    switch(action){
        default: return {...state};
    }
}