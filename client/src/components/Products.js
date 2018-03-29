import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addProductToReport } from '../actions'
import Header from './Header'
import Product from './product'
import 'bootstrap/dist/css/bootstrap.css'
import "../index.css"

class Products extends React.Component {
    render() {
        return (
            <div>
                <Header page={'product'}/>
                <div className='container-fluid'>
                    <div className="jumbotron-fluid content">
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