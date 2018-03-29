import React from 'react'
import { connect } from "react-redux"
import ReactDOM from 'react-dom'
import "../index.css"
import Header from './Header'
import SearchBar from './SearchBar'
import 'bootstrap/dist/css/bootstrap.css'
import Product from './product'
import { bindActionCreators } from "redux"
import { addProductToReport } from '../actions'

class Products extends React.Component {
    render() {
        return (
            <div>
                <Header page={'product'}/>
                <div className='container-fluid'>
                    <div className="jumbotron-fluid">
                        <img className='card-img' id='img-home' src='https://i.pinimg.com/originals/60/ce/d7/60ced7b94088b83805de4fe3c2380635.jpg' alt='red tile roofed house'/>
                        <div className="card-img-overlay mt-5 pt-5">
                            <div className='row'>
                                {
                                    this.props.products.map((product, i) => {
                                        return <Product key={product.ASIN[0]} 
                                            product={product} 
                                            addProduct={(product) => console.log(this.props.addProductToReport(product))} 
                                        />
                                    })
                                } 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { 
        products: state.products
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addProductToReport }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);