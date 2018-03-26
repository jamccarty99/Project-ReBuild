import { FETCH_PRODUCTS, FETCH_SINGLE_PRODUCT } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
        return action.payload.data;
    case FETCH_SINGLE_PRODUCT:
        return action.payload.data;
    default:
        return state;
  }
}
