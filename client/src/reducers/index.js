import { combineReducers } from "redux";
import ProductsReducer from "./reducer-products";
import FormReducer from "./form-reducer";


const rootReducer = combineReducers({
  products: ProductsReducer,
  form: FormReducer
});

export default rootReducer;