import axios from "axios";
import {
  getProductsFailureAction,
  getProductsRequestAction,
  setAllProductsData,
  setCurruntRoute,
} from "./redux/ProductsReducer/action";

const baseUrl = " http://localhost:8080";

export const getProductData = (path, filter) => async (dispatch) => {
  // console.log(filter)

  try {
    dispatch(getProductsRequestAction());

    if (typeof filter === "object") {
      let res = await axios.get(`${baseUrl}${path}`, { params: { ...filter } });
      //console.log(res);
      dispatch(setCurruntRoute(path.replace("/", "")));
      return await res.data;
    } else {
      let res = await axios.get(`${baseUrl}${path}`);
      let data = await res.data;

      const route = path.replace("/", "");
      dispatch(setAllProductsData(data, route));
    }
  } catch (err) {
    console.log(err.message);
    dispatch(getProductsFailureAction());
  }
};
