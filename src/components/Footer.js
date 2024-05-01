import React from 'react'
import '../App.css';
import logo from "../images/title2.png";

export default function Footer() {
  return (
    <div>
      <div className ="end-info">
        <div className="information">
            <div className="title"><img src={logo} alt="" /></div>
            <p style={{fontWeight:800, color:"black"}}>Contact</p>
            <br />
            <p><span style={{fontWeight:700}}>Address:</span> 589 Wallington Road, street 55, Florida</p>
            <p><span style={{fontWeight:700}}>Phone:</span> +012222345/ (+011)2345 6789</p>
            <p><span style={{fontWeight:700}}>Hours:</span> 9:00 - 20:00, Mon-Fri</p>
            <br />
            <p style={{fontWeight:800, color:"black"}}>Follow Us</p>
            <br />
            <i className="fa-brands fa-facebook-f" style={{color:"black"}}></i> <i className="fa-brands fa-twitter" style={{color:"black"}}></i> <i className="fa-brands fa-instagram" style={{color:"black"}}></i> <i className="fa-brands fa-pinterest-p" style={{color:"black"}}></i> <i className="fa-brands fa-youtube" style={{color:"black"}}></i>
        </div>
        <div className="about">
            <p style={{fontWeight:800, color:"black"}}>About</p>
            <br />
            <p>About Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
        </div>
        <div className="account">
            <p style={{fontWeight:800, color:"black"}}>My Account</p>
            <br />
            <p>Sign In</p>
            <p>View Cart</p>
            <p>My Wishlist</p>
            <p>Track My order</p>
            <p>Help</p>
        </div>
        <div className="app">
            <p style={{fontWeight:800, color:"black"}}>Install App</p>
            <br />
            <p>From App Store or Google Play</p>
            <button><i className="fa-brands fa-apple" style={{fontSize:25, marginRight:6}}></i> App Store</button>
            <button><i className="fa-brands fa-google-play" style={{fontSize:25, marginRight:6}}></i>Google Play</button>
            <br />
            <br />
            <p>Secured Payment Gateways</p>
            <br />
            <i className="fa-brands fa-cc-visa" style={{fontSize:40, color:"rgb(10, 10, 33)", marginRight:10}} ></i> <i className="fa-solid fa-credit-card" style={{fontSize:40, color:"rgb(10, 10, 33)", marginRight:10}}></i> <i className="fa-brands fa-cc-mastercard" style={{fontSize:40, color:"rgb(10, 10, 33)", marginRight:10}}></i> <i className="fa-brands fa-google-pay" style={{fontSize:40, color:"rgb(10, 10, 33)", marginRight:10}}></i>
        </div>
    </div>

    <footer>
        &#169; 2024, Narshi - HTML,CSS Ecommerce Site
    </footer>

    </div>
  )
}
