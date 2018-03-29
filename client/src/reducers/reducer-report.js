import { ADD_PRODUCT } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
        return [...state, action.payload];
    default:
        return state;
  }
}