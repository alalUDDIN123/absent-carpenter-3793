
const initialState={
    users:[]
}

export const userReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case "userRequest":
            return{
                ...state,
            }
        
            default:return state
    }
}