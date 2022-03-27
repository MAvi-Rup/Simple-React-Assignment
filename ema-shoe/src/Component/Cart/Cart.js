import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // const{product}=props.product
    // let ShoeName,ShoePrice,ShoeImg;
    // for(const {name,price,img} of cart){
    //     ShoeName=name;
    //     ShoePrice=price;
    //     ShoeImg=img
    // }







    return (
        <div className='container'>


            <span className='image'>
                {
                    cart.map(product => <div key={product.id}>
                        <img src={product.img} alt="Image" /> <span className='fw-bold'> {product.name}</span>
                    </div>)
                }
            </span>
          
        </div>
    );
};

export default Cart;