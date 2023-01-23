
import axios from "axios";
import * as types from "./actionTypes"

// =============================== Users============================ 👍

// Get User 

export const getUser = () => async (dispatch) => {

    try {
        let data = await axios.get(`https://masai-cart-server.vercel.app/users`)
        
        dispatch({ type: types.GET_USER_SUCCESS, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}



//Add User

export const addUser = (payload) => async (dispatch) => {
   
    try {
        let data = await axios.post(`https://masai-cart-server.vercel.app/users`, payload)
        dispatch({ type:types.ADD_USER_SUCCESS, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}

//update User

export const UpdateUser = (id, payload) => async (dispatch) => {

    try {
        let data = await axios.patch(`https://masai-cart-server.vercel.app/users/${id}`, payload)
        dispatch({ type: types.EDIT_USER_SUCCESS, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}

//delete User

export const DeleteUser = (id) => async (dispatch) => {

    try {
        let data = await axios.delete(`https://masai-cart-server.vercel.app/users/${id}`)
        dispatch({ type: types.DELETE_USER_SUCCESS, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}