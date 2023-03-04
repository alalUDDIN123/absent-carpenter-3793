
import axios from "axios";
import * as types from "./actionTypes"

// =============================== Users============================ 👍

// Get User 

export const getUser = () => async (dispatch) => {

    try {
        let data = await axios.get(`${process.env.REACT_APP_JSON_SERVER_URL}/users`)
        
        dispatch({ type: types.GET_USER_SUCCESS, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}



//Add User

export const addUser = (payload) => async (dispatch) => {
   
    try {
        let data = await axios.post(`${process.env.REACT_APP_JSON_SERVER_URL}/users`, payload)
        dispatch({ type:types.ADD_USER_SUCCESS, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}

//update User

export const UpdateUser = (id, payload) => async (dispatch) => {

    try {
        let data = await axios.patch(`${process.env.REACT_APP_JSON_SERVER_URL}/users/${id}`, payload)
        dispatch({ type: types.EDIT_USER_SUCCESS, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}

//delete User

export const DeleteUser = (id) => async (dispatch) => {

    try {
        let data = await axios.delete(`${process.env.REACT_APP_JSON_SERVER_URL}/users/${id}`)
        dispatch({ type: types.DELETE_USER_SUCCESS, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}