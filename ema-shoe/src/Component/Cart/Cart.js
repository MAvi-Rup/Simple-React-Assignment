import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    // const{product}=props.product
    
   



    return (
        <div className='container'>
            
            
                <span className='image'>
                    <img src={props.product.img} alt="Image" /> <span className='fw-bold'> {props.product.name}</span> 

                </span>



            
        </div>
    );
};

export default Cart;