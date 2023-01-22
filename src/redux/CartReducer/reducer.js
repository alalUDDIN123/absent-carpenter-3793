import { ADD_TO_CART,DEC_QTY, INC_QTY, REMOVEFROM_CART } from "./actionTypes";

const cartinitstate={
    cart:[]
}

const cartReducer=(state=cartinitstate,action)=>{
    const {type,payload} = action

    switch(type){
        case ADD_TO_CART :
            // return{...state,cart:[...state.cart, payload]}

            const isPresent=state.cart.find((product)=>{
                return product.id === payload.id
            })

            let newCart
            
            if(isPresent){
                newCart=state.cart.map((product)=>{
                    if(product.id===payload.id){
                        return {...product, qty:product.qty+1}
                    }
                    else{
                        return product
                    }
                })


            }
            else{
                let newPayload={
                    ...payload,
                    qty:1
                }
                newCart=[...state.cart,newPayload  ]
            }

            return {...state, cart:newCart}

        case INC_QTY:
            let modifiedcartinc=state.cart.map((product)=>{
                if(product.id===payload.id){
                    return {...product, qty:product.qty+1}
                }
                else{
                    return product
                }
            })
            return{...state,cart:modifiedcartinc}

        case DEC_QTY:
            let modifiedcartdec=state.cart.map((product)=>{
                if(product.id===payload.id){
                    return {...product, qty:product.qty-1}
                }
                else{
                    return product
                }
            })
            return{...state,cart:modifiedcartdec}

        case REMOVEFROM_CART:
            let updatedCart=state.cart.filter((product)=>{
                return !(product.id===payload.id)
            })

            return{...state,cart:updatedCart}


        default:
            return state
    }
}

export {cartReducer}