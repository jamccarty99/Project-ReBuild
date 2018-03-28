import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap';//just a reminder of how to operate rb
import "../index.css"
import Header from './Header'
import SearchBar from './SearchBar'
import 'bootstrap/dist/css/bootstrap.css'

const Product = (props) => {
    return (
        <div>
            <Header />
            <SearchBar />
        </div>
    )
}


export default Product;