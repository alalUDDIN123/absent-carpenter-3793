import { ADD_TO_CART, DEC_QTY, INC_QTY, REMOVEFROM_CART } from "./actionTypes";


const addToCart= (payload)=>({
    type : ADD_TO_CART,
    payload
})

const DecrementQty=(payload)=>({
    type:DEC_QTY,
    payload

})

const IncrementQty=(payload)=>({
    type:INC_QTY,
    payload
})

const RemoveFromCart=(payload)=>({
    type:REMOVEFROM_CART,
    payload
})


export {addToCart, DecrementQty, IncrementQty, RemoveFromCart}