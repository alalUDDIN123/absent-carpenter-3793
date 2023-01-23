import * as types from "./actionTypes"
const initialState={
    users:[]
}

export const userReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case types.GET_USER_SUCCESS:
            return{
                ...state,
                users:payload
            }
        case types.ADD_USER_SUCCESS:
            return{
                ...state,
                users:[...state.users,payload]
            }
        
            default:return state
    }
}