import React,{useLayoutEffect, useState, useContext} from 'react'
import '../css/product.css';
import { Link } from 'react-router-dom';
import alertContext from '../context/AlertContext';
import orderContext from '../context/OrderContext';

export default function ProductDetails() {

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const {showAlert} = useContext(alertContext);
  const {addOrder} = useContext(orderContext);
  

  useLayoutEffect(() => {
    setLoading(true);
    initialSetup();
  }, []);

  const initialSetup = async() =>{
    const id= localStorage.getItem("id"); 
    fetch(`https://dummyjson.com/products/${Number(id)}`).then(response=> response.json()).then(result=>{setProduct(result); setLoading(false)}).catch((error)=>{console.log(error)});
  }

  const handleCart = () =>{
    if(!localStorage.getItem("token")){
      showAlert("Sign up for adding items to the cart", "danger");
    }else{
      addOrder(product.id, product.title, product.images[0], product.price);
      showAlert("Item added to the cart", "success");
    }
}

  return (
    <div>
      {!loading ? <div className="ind-product">
        <div className="product-img">
            <img src={product.images[0]} alt=""></img>
        </div>
        <div className="product-details">
            <Link to="/" id="link">Home</Link>
            <div className="title">{product.title}</div>
            <div className="price">$ {product.price}</div>
            <div className="category">{product.category}</div>
            <div className="rating">
                <span className= {`fa fa-star ${product.rating>=1?"checked":""} `} style={{fontSize:20}}></span>
                <span className={`fa fa-star ${product.rating>=2?"checked":""} `} style={{fontSize:20}}></span>
                <span className={`fa fa-star ${product.rating>=3?"checked":""} `} style={{fontSize:20}}></span>
                <span className={`fa fa-star ${product.rating>=4?"checked":""} `} style={{fontSize:20}}></span>
                <span className={`fa fa-star ${product.rating>=5?"checked":""} `} style={{fontSize:20}}></span>
            </div>
            <button id="add" onClick={handleCart} diabled ={!localStorage.getItem("token")}>Add to Cart</button>
            <h2>Product Details</h2>
            <p>{product.description}</p>
        </div>
      </div>: ""}
    </div>
  )
}
