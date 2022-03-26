import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, img } = props.product
    return (
        <div className='card-container '>
            <div className="card-group m-2">
                <div className="card">
                    <img src={img} className="card-img-top" alt="Text"/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Price: {price}</p>
                            <button onClick={()=>props.eventHandler(props.product)} className='btn btn-success'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;