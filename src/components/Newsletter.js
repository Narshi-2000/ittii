import React from 'react'
import '../App.css';

export default function Newsletter() {
  return (
    <div>
      <div className="newsletter">
        <div className="desc">
            <h1>Sign Up For Newsletters</h1>
            <p  style={{color:"rgb(93, 92, 91)"}}>Get E-mail updates about our latest shop and <span style={{color:"rgb(235, 171, 43)"}}>special offers.</span></p>
        </div>
        <div className="input">
            <input type="email" placeholder="Your email address" /><button>Sign Up</button>
        </div>
    </div>
    </div>
  )
}
