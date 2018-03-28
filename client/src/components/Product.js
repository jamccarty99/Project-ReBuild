import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap';//just a reminder of how to operate rb
import "../index.css"
import Header from './Header'
import SearchBar from './SearchBar'
import 'bootstrap/dist/css/bootstrap.css'
import Data from './data'

const Product = (props) => {
    return (
        <div>
            <Header page={'product'}/>
            <Data />
        </div>
    )
}


export default Product;