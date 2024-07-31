
import React, { useEffect, useState } from 'react'
import Product from '../components/Product'

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [products,setProducts] = useState([]);

    async function fetchProductData() {
        try{
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data);
            setProducts(data);
        }
        catch(error){
            console.log("error fetching API");
            setProducts([]);
        }
    }

    useEffect(() => {
        fetchProductData();
    },[]); 

  return (
    <div >
        {
            <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2'>
                {
                    products.map( (product) => <Product key={product.id} product={product} />)
                }
            </div>
            
        }
        
        
    </div>
  )
}

export default Home