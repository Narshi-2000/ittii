import React,{useEffect, useState} from 'react';
import Product from './Product';

export default function Search() {
    const [products, setProducts] = useState([]);

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    const getProducts = async()=>{
        try {
            const response = await fetch(`https://dummyjson.com/products/category/${localStorage.getItem("category")}`);
            const result = await response.json();
            setProducts(result["products"]);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getProducts();

        // eslint-disable-next-line
    },[])
  return (
    <div>
        <div className="featured-products">
            <div className="title">
                <h1>{capitalize(localStorage.getItem("category"))} </h1>
                <p>Latest Collections</p>
            </div>
            <div className="products row">
            {products.map((product)=>{
                return <div className="col-md-3">
                <Product key={product.id} id={product.id} prod_img={product.images[0]} title={product.title.slice(0,35)} company={product.category} rating={product.rating} price={product.price}/>
                </div>
            })}    
            </div>
        </div>
      
    </div>
  )
}
