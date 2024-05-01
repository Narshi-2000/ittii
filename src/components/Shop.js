import React,{useContext, useEffect} from 'react'
import '../App.css';
import Product from './Product';
import Footer from './Footer';
import productContext from '../context/ProductContext';

export default function Shop() {
    const {products, getProducts} = useContext(productContext);

    useEffect(()=>{
        getProducts();

        // eslint-disable-next-line
    },[])


  return (
    <div className="shop-div">
      <div className="title1">
        <div className="description">
            <h1>#stayhome</h1>
            <p>Save more with coupons & up to 70% off!</p>
        </div>
    </div>
    <div className="products">
            {products.map((product)=>{
                return <div className="col-md-3">
                <Product key={product.id} id={product.id} prod_img={product.images[0]} title={product.title.split(0,15)} company={product.category} rating={product.rating} price={product.price}/>
                </div>
            })}    
    </div>

    <Footer />
    </div>
  )
}
