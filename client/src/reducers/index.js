import { combineReducers } from "redux";
import ProductsReducer from "./reducer-products";
import ReportReducer from "./reducer-report";

const rootReducer = combineReducers({
  products: ProductsReducer,
  report: ReportReducer
});

export default rootReducer;