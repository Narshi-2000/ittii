import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ProductState from "./context/ProductState";
import Checkout from "./components/Checkout";
import AlertState from "./context/AlertState";
import Search from "./components/Search";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OrderState from "./context/OrderState";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Router>
        <ProductState>
          <OrderState>
            <Navbar />
            <AlertState>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/shop" element={<Shop />} />
                <Route exact path="/productDetails" element={<ProductDetails />}/>
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route exact path="/search" element={<Search />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/userorders" element={<User />} />
              </Routes>
            </AlertState>
          </OrderState>
        </ProductState>
      </Router>
    </div>
  );
}

export default App;
