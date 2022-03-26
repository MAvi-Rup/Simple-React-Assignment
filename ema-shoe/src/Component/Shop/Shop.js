import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [shoes, setShoe] = useState([])
    const [cart,setCart]= useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setShoe(data))
    }, [])
    const updateCart =(product)=>{
        const newCart = [...cart,product]
        setCart(newCart)
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

                </div>
            </div>

        </div>
    );
};

export default Shop;