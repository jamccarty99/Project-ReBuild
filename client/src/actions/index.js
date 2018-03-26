import axios from "axios";
import { FETCH_FORMS, FETCH_PRODUCTS, FETCH_SINGLE_FORM, FETCH_SINGLE_PRODUCT } from './types';

const ROOT_URL = `http://localhost:5000/rebuild`;



export function fetchProducts(formData) {
  const search = formData.search.replace(" ","%20") ? `&q=${formData.search.replace(" ","%20")}`:""
  const price = formData.price ? `&price=${formData.price}`:""
  const category = formData.category ? `&category=${formData.category}`:""
  const footer = formData.footer ? `${formData.footer}`:""
  const url = `${ROOT_URL}?page=${footer}${category}${price}${search}`;
  console.log(url);
  
  const request = axios.get(url)

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export function fetchForms(req) {
    const request = axios.get(`${ROOT_URL}`)
  
    return {
      type: FETCH_FORMS,
      payload: request
    };
  }

export function fetchAllProducts(req) {
  const request = axios.get(`${ROOT_URL}`)

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
