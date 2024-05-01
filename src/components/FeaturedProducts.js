import React,{useContext, useEffect} from 'react'
import Product from './Product';
import '../App.css';
import productContext from '../context/ProductContext';

export default function FeaturedProducts() {
  
    const {products, getProducts} = useContext(productContext);

    useEffect(()=>{
        getProducts();

        // eslint-disable-next-line
    },[])

  return (
    <div>
        <div className="featured-products">
            <div className="title">
                <h1>Inspired by your shopping trends</h1>
                <p>Deals for you</p>
            </div>
            <div className="products">
            {products.slice(0,8).map((product, i)=>{
                return <div className="col-md-3">
                <Product key={i} id={product.id} prod_img={product.images[0]} title={product.title.slice(0,40)} company={product.category} rating={product.rating} price={product.price}/>
                </div>
            })}    
            </div>
        </div>
    </div>
  )
}
