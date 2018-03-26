import { FETCH_FORMS, FETCH_SINGLE_FORM } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_FORMS:
        return action.payload.data;
    case FETCH_SINGLE_FORM:
        return action.payload.data;
    default:
        return state;
  }
}
