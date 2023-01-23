import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { userReducer } from "./AppReducer/adminReducer";
import { reducer as ProductsManager } from "./ProductsReducer/reducer"
import { cartReducer } from "./CartReducer/reducer";
import thunk from "redux-thunk";


const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

let rootReducer = combineReducers({ ProductsManager, userReducer ,cartReducer})
 const store = legacy_createStore(rootReducer, composer(applyMiddleware(thunk)));
 export default store;