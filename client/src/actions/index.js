import axios from "axios";
import { FETCH_FORMS, FETCH_PRODUCTS, FETCH_SINGLE_FORM, FETCH_SINGLE_PRODUCT } from './types';

const ROOT_URL = `http://localhost:5000/`



export function fetchProducts(search) {
  
  return {
    type: FETCH_PRODUCTS,
    payload: search
  };
}

export function fetchForms(req) {
    const request = axios.get(`${ROOT_URL}`)
  
    return {
      type: FETCH_FORMS,
      payload: request
    };
  }
  export function fetchSingleForm(id) {
    const request = axios.get(`${ROOT_URL}/:id`)
  
    return {
      type: FETCH_SINGLE_FORM,
      payload: request
    };
  }

export function fetchSingleProduct(id) {
  const request = axios.get(`${ROOT_URL}/:id`)

  return {
    type: FETCH_SINGLE_PRODUCT,
    payload: request
  };
}
