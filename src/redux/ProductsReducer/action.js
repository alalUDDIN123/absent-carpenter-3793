import axios from "axios";
import {
  EDIT_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  SET_PRODUCTS_ROUTE,
  SET_ALL_PRODUCTS_DATA
} from "./actionType";

export const getProductsRequestAction = () => {
  return { type: GET_PRODUCTS_REQUEST };
};

export const getProductsSuccessAction = (payload) => {
  
  return { type: GET_PRODUCTS_SUCCESS, payload };
};

export const getProductsFailureAction = () => {
  return { type: GET_PRODUCTS_FAILURE };
};

export const setCurruntRoute = (payload) => {
    
    return { type:  SET_PRODUCTS_ROUTE,payload};
  };

export const setAllProductsData = (data,route) => {
    const payload={route,data}
    console.log(payload)
    return { type:SET_ALL_PRODUCTS_DATA,payload};
  };

export const editProductSuccess = () => {
  return { type: EDIT_PRODUCT_SUCCESS };
};

// export const editProduct = (id, productData) => (dispatch) => {
//   return axios
//     .patch(`http://localhost:8080/PRODUCTS/${id}`, productData)
//     .then(() => {
//       dispatch(editProductSuccess());
//     });
// };

// ?category=Novel&category=Motivational