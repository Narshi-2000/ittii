import React from 'react'
import logo1 from '../images/free-shipping.avif';
import logo2 from '../images/online order.webp';
import logo3 from '../images/save-money.avif';
import logo4 from '../images/promotions.png';
import logo5 from '../images/save-money.avif';
import logo6 from '../images/support.avif';
import FeaturedProducts from './FeaturedProducts';
import NewArrivals from './NewArrivals';
import Newsletter from './Newsletter';
import Footer from './Footer';

export default function Home(props) {
  return (
    <div>
      <div className="introduction">
        <div className="description">
            <span id="first">Trade-in-offer</span>
            <span id="second">Super value deals</span>
            <span id="third">On all products</span>
            <span id="fourth">Save more with coupons & up to 70% off!</span>
            <span id="fifth"></span>
        </div>
        <div className="intro-image">
                {/* <img src={logo} alt=""/> */}
        </div>
    </div>

    <div className="features">
        <div className="feature">
            <div className="feature-img"><img src={logo1} alt=""/></div>
            <div className="feature-title" style={{backgroundColor:"rgb(220, 180, 187)"}}>Free Shipping</div>
        </div>
        <div className="feature">
            <div className="feature-img"><img src={logo2} alt=""/></div>
            <div className="feature-title" style={{backgroundColor:"rgb(146, 211, 141)"}}>Online Order</div>
        </div>
        <div className="feature">
            <div className="feature-img"><img src={logo3} alt=""/></div>
            <div className="feature-title" style={{backgroundColor:"rgb(159, 159, 213)"}}>Save Money</div>
        </div>
        <div className="feature">
            <div className="feature-img"><img src={logo4} alt=""/></div>
            <div className="feature-title" style={{backgroundColor:"rgb(141, 173, 236)"}}>Promotions</div>
        </div>
        <div className="feature">
            <div className="feature-img"><img src={logo5} alt=""/></div>
            <div className="feature-title" style={{backgroundColor:"rgb(213, 190, 159)"}}>Happy Sell</div>
        </div>
        <div className="feature">
            <div className="feature-img"><img src={logo6} alt=""/></div>
            <div className="feature-title" style={{backgroundColor:"rgb(199, 213, 159)"}}>F24/7 Support</div>
        </div>
    </div>

    <FeaturedProducts/>

    <div className="banner">
        <div className="desc">
            <p style={{color:"white"}}>Repair Services</p>
            <h1>Up to <span style={{color:"red"}}>70% Off</span> - All t-shirts & Accessories</h1>
            <button>Explore More</button>
        </div>
    </div>

    <NewArrivals />

    <Newsletter />

    <Footer />

    </div>
  )
}
