import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [shoes, setShoe] = useState([])
    let [cart,setCart]= useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setShoe(data))
    }, [])
    const updateCart =(product)=>{
        const newCart = [...cart,product]
        setCart(newCart)
    }
    const clearCart = ()=>{
        cart =[]
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-9">
                    <h1 className='text-center'>Find Your Best Sneakers From Here</h1>
                    <div className="d-flex flex-wrap ">
                        {
                            shoes.map(product => <Product key={product.id} product={product} eventHandler={updateCart}></Product>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                <h3 className='text-center'>Added Items</h3>
                    {
                        cart.map(product=><Cart key={product.id} product={product}></Cart>)
                    }
                
                <button className='btn btn-primary m-2'>Select 1 For Me</button>
                <button onClick={clearCart} className='btn btn-primary m-2'>Clear Cart</button>
                

                </div>
            </div>

        </div>
    );
};

export default Shop;