import axios from "axios";
import { FETCH_PRODUCTS, ADD_PRODUCT } from './types';

export function fetchProducts(search) {
  search = search.split(' ').join('+')

  const request = axios.get(`http://localhost:5000/amazon/All?title=${search}` )

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export function addProductToReport(product) {

  return {
    type: ADD_PRODUCT,
    payload: product
  };
}