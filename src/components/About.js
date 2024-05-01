import React from "react";
import "../App.css";
import logo from "../images/ecomm.jpg";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="about-div">
      <div className="title1">
        <div className="description">
          <h1>#KnowUs</h1>
          <p>Get to know more about us!!!</p>
        </div>
      </div>

      <div className="details">
        <div className="ecom-image">
          <img src={logo} alt="" />
        </div>
        <div className="desc">
          <h1> Who We Are?</h1>
          <p>
            At ittii, we believe in our core values, such as customer
            satisfaction, sustainability, etc. Explore our wide range of
            products, we have something for everyone. We prioritize our
            customers' satisfaction above all else. Our dedicated support team
            is available to assist you with any questions or concerns. We're
            committed to making a positive impact in our community and beyond.
            Stay updated on the latest news, offers, and promotions by
            subscribing to our newsletter. Follow us on social media for daily
            inspiration and behind-the-scenes content. We appreciate your
            support and trust in ittii. Shop now and experience the difference!
          </p>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}
