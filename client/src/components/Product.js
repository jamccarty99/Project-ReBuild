import React from 'react'
import '../index.css';

const Product = ({product, addProduct}) => {
    return (           
        <div className='col-md-3'>
            <div className="card text-white bg-info mb-5 mt-3 ml-5 mr-2">
                <img className='pt-3 rounded mx-auto d-block' src={product.MediumImage[0].URL[0]} width="auto" height="auto" alt={product.ItemAttributes[0].Title[0]}/>
                <div className="card-body">
                    <h5 className="card-title">{product.ItemAttributes[0].Title[0]}</h5>
                    <p className="card-text">{product.ItemAttributes[0].Department[0]} - {product.ItemAttributes[0].Color[0]} - {product.ItemAttributes[0].Size[0]}</p>
                    <span className='ml-auto p-2 font-weight-bold text-xl-left mr-4' id='cost' >{product.ItemAttributes[0].ListPrice[0].FormattedPrice[0]}</span>
                        <button onClick={() => addProduct(product)}>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default Product