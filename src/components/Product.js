import React,{useContext} from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import alertContext from '../context/AlertContext';
import orderContext from '../context/OrderContext';

export default function Product(props) {
    const {id, prod_img, company, title, rating, price} = props;
    const {showAlert} = useContext(alertContext);
    const {addOrder} = useContext(orderContext);

    const navigate = useNavigate();

    const handleCart = () =>{
        if(!localStorage.getItem("token")){
            showAlert("Sign up for adding items to the cart", "danger");
        }else{
            addOrder(id, title, prod_img, price);
            showAlert("Item added to the cart", "success");  
        }
    }

    const handleRead = () =>{
        localStorage.setItem("id", id);
        navigate("/productDetails");
    }

  return (
    <div>
      <div className="product">
                <div className="prod-img"><img src={prod_img} alt=""/></div>
                <div className="prod-desc">
                    <p>{company}</p>
                    <div className="prod-title">{title}</div>
                    <div className="bottom">
                        <div className="left">
                            <div className="rating">
                                <span className= {`fa fa-star ${rating>=1?"checked":""} `}></span>
                                <span className={`fa fa-star ${rating>=2?"checked":""} `}></span>
                                <span className={`fa fa-star ${rating>=3?"checked":""} `}></span>
                                <span className={`fa fa-star ${rating>=4?"checked":""} `}></span>
                                <span className={`fa fa-star ${rating>=5?"checked":""} `}></span>
                            </div>
                            <div className="price"> &#8377;{price}</div>
                        </div>
                        <div className="right">
                            <button  className="btn" type="button" id="cart" onClick={handleCart}><i className="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
                </div>
                <button className="btn" id="read" onClick={handleRead}>Read more</button>
            </div>
    </div>
  )
}
