import {
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  SET_PRODUCTS_ROUTE,
  SET_ALL_PRODUCTS_DATA,
  SET_SINGLE_PRODUCT_DATA
} from "./actionType";

const initialState = {
  allProducts: [],
  products: [],
  filter: {},
  singleProduct: {},
  cartProducts: [],
  favoriteProduct: [],
  currentRoute: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case  SET_PRODUCTS_ROUTE:
      return { ...state,  currentRoute:payload };
    case SET_ALL_PRODUCTS_DATA:
      return { ...state, allProducts:{...state.allProducts,[payload.route]:payload.data} };
      case SET_SINGLE_PRODUCT_DATA:
      return { ...state, singleProduct: payload,isLoading:false };
    case EDIT_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
