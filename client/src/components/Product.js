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
            <div className='container-fluid'>
                <div className="jumbotron-fluid">
                    <img className='card-img' id='img-home' src='https://i.pinimg.com/originals/60/ce/d7/60ced7b94088b83805de4fe3c2380635.jpg'/>
                    <div className="card-img-overlay mt-5 pt-5">
                    <Data />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Product;