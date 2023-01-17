import { legacy_createStore } from "redux";
import { userReducer } from "./AppReducer/adminReducer";

const store=legacy_createStore(userReducer)

export default store;