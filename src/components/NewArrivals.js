import React,{useEffect, useContext} from 'react'
import Product from './Product';
import '../App.css';
import productContext from '../context/ProductContext';

export default function NewArrivals() {
    const context = useContext(productContext);
    const {products, getProducts} = context;

    useEffect(()=>{
        getProducts();

        // eslint-disable-next-line
    },[])

  return (
    <div>
      <div className="featured-products">
            <div className="title">
                <h1>New Arrivals</h1>
                <p>Discover products</p>
            </div>
            <div className="products row">
            {products.slice(8,16).map((product, i)=>{
                return <div className="col-md-3">
                <Product key={i+10} id={product.id} prod_img={product.images[0]} title={product.title.slice(0,35)} company={product.category} rating={product.rating} price={product.price}/>
                </div>
            })}    
            </div>
        </div>
    </div>
  )
}
