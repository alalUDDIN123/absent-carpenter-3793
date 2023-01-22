
import axios from "axios";
import * as types from "./actionTypes"

// =============================== Users============================ 👍

// Get User 

export const getUser = () => async (dispatch) => {

    try {
        let data = await axios.get(`http://localhost:8080/users`)
        
        dispatch({ type: types.GET_USER_SUCCESS, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}



//Add User

export const addUser = (payload) => async (dispatch) => {
   
    try {
        let data = await axios.post(`http://localhost:8080/users`, payload)
        dispatch({ type:types.ADD_USER_SUCCESS, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}

//update User

export const UpdateUser = (id, payload) => async (dispatch) => {

    try {
        let data = await axios.patch(`http://localhost:8080/users/${id}`, payload)
        dispatch({ type: types.EDIT_USER_SUCCESS, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}

//delete User

export const DeleteUser = (id) => async (dispatch) => {

    try {
        let data = await axios.delete(`http://localhost:8080/users/${id}`)
        dispatch({ type: types.DELETE_USER_SUCCESS, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}