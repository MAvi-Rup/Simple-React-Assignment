import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [shoes, setShoe] = useState([])
    let [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setShoe(data))
    }, [cart])
    // useEffect((clearCart)=>{cart=[]},[cart])

    const updateCart = (product) => {
        const productExist = cart.find((item) => item.id === product.id)
        if (!productExist) {
            const newCart = [...cart, product]
            setCart(newCart)
        }
    }
    const removeCart=()=>{
        cart=[]
        const newCart = [...cart]
        setCart(newCart)
    }
    const findCart =()=>{
        const randomElement = [cart[Math.floor(Math.random() * cart.length)]];
        const newCart =[...randomElement]
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
                    <div className='cart'>
                        {
                            // cart.map(product => <Cart key={product.id} product={product}></Cart>)
                            <Cart cart={cart}></Cart>

                        }
                    </div>
                    <button onClick={findCart} className='btn btn-primary m-2'>Select 1 For Me</button>
                    <button onClick={removeCart} className='btn btn-primary m-2'>Clear Cart</button>


                </div>
            </div>

        </div>
    );
};

export default Shop;