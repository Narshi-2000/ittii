import React,{useContext} from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import {
    Link,
    useNavigate
  } from "react-router-dom";
import logo from "../images/title2.png";
import orderContext from '../context/OrderContext';

export default function Navbar() {

  const {num} = useContext(orderContext);
  const navigate = useNavigate();
  const location = useLocation()

  if(location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  window.onload=()=>{
    const selectEle = document.querySelector("#category");
    selectEle.addEventListener("change",(e)=>{
      localStorage.setItem("category", e.target.value);
      navigate("/search");
    })
  }

  const handleLogout =()=>{
    localStorage.removeItem("token");
    navigate("/");
  }

  const myFunction=(e)=> {
    e.preventDefault();
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div>
      <nav id="topnav">
        <div id="title"><img src={logo} alt=""></img></div>
        <select name="category" id="category" defaultValue={'DEFAULT'} style={{fontSize:18}}>
          <option value="DEFAULT" disabled hidden>select a category</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smart phones</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
          <option value="groceries" >Groceries</option>
          <option value="home-decoration">Home decoration</option>
          <option value="furniture">Furniture</option>
          <option value="tops">Tops</option>
          <option value="womens-dresses">Women Dresses</option>
          <option value="womens-shoes">Women Shoes</option>
          <option value="mens-shirts">Mens Shirts</option>
          <option value="mens-shoes">Mens Shoes</option>
          <option value="mens-watches">Mens Watches</option>
          <option value="womens-watches">Womens Watches</option>
          <option value="womens-bags">Womens bages</option>
          <option value="womens-jewellery">Womens Jewellery</option>
          <option value="sunglasses">Sunglasses</option>
          <option value="automotive">Automative</option>
          <option value="motorcycle">Motorcycle</option>
          <option value="lighting">Lighting</option>
        </select>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            {localStorage.getItem("token") && <li><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i>{num>0?<sup className="num-cart">{num}</sup>:""}</Link></li>}
            {!localStorage.getItem("token")?<li id="sign-up"><Link to="/login">Log In</Link></li>:<li onClick ={handleLogout} style={{color:"grey"}}>Logout</li>}
            {localStorage.getItem("token") && <li><Link to="/userorders"><i class="fa-solid fa-user"></i></Link></li>}
            <Link to="#" className="icon" onClick={myFunction}>
              <i className="fa fa-bars"></i>
            </Link>
        </ul>
      </nav>
    </div>
  )
}
