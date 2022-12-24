import React ,{useState} from 'react';
import "../style/main.css";
import {GiShoppingCart} from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from './components/ShoppingCart';



function App() {
  const [cartsVisible, setCartsVisible] = useState(false);
  const [products, setProducts] = useState([]);
 
  return (
    <div className="App">
      <ShoppingCart  visibilty={cartsVisible} 
      products={products}  
      
      />
      <div className="navbar">
        <h3 className='logo'>Logo</h3>
        <button className="btn shopping-cart-btn" onClick={() => sertCart}>
          <GiShoppingCart size={30} />
        </button>
        </div>
        <main>
          
          
          </main>        
        
        <footer>
          <div className="footer-container">
            <div className="footer-left">
              <h3>Logo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quae.
              </p>
              <div className="social-media">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
      </div>
    </div>
    <div className="footer-center">
      <h3>Useful Links</h3>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul> 
    </div>
    <div className="footer-right">
      <h3>Newsletter</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        quae.
      </p>
      <form action="">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>
</footer>
</div>
  );
}

export default App;
