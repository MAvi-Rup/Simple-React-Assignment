import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [shoes, setShoe] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setShoe(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-10">
                    <h1 className='text-center'>Find Your Best Sneakers From Here</h1>
                    <div className="d-flex flex-wrap ">
                        {
                            shoes.map(product => <Product key={product.id} product={product}></Product>)

                        }
                    </div>
                </div>
                <div className="col-md-2">
                        <h3>Cart Container</h3>

                        {/* <Cart cart={cart}></Cart> */}

                </div>



            </div>

        </div>
    );
};

export default Shop;