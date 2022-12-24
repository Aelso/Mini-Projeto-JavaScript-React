import React, {
  useState,
  useEffect,
} from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";

const products = [
  {
    id: 1,
    name: "Vivamus vitae",
    rating: 4.3,
    description:
      "Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
    price: 199,
    image: require("./assets/images/product-1.jpg"),
  },
  {
    id: 2,
    name: "Fusce sit amet ipsum",
    rating: 4.2,
    description:
      "Maecenas fermentum urna egestas urna ullamcorper sodales. Sed a enim imperdiet, tempus massa a, iaculis tellus.",
    price: 229,
    image: require("./assets/images/product-2.jpg"),
  },
  {
    id: 3,
    name: "Etiam volutpat aliquam",
    rating: 3.2,
    description:
      "Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
    price: 99,
    image: require("./assets/images/product-3.jpg"),
  },
  {
    id: 4,
    name: "Lorem ipsum dolor",
    rating: 4.8,
    description:
      "Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
    price: 119,
    image: require("./assets/images/product-4.jpg"),
  },
  {
    id: 5,
    name: "Ultrices nisl",
    rating: 4.5,
    description:
      "Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
    price: 85,
    image: require("./assets/images/product-5.jpg"),
  },
  {
    id: 6,
    name: "Curabitur in elementum tortor",
    rating: 3.8,
    description:
      " Mauris convallis diam nibh, non malesuada enim facilisis non. Etiam sapien augue, molestie a porta sed",
    price: 149,
    image: require("./assets/images/product-6.jpg"),
  },
];

function App() {
  const [cartsVisibilty, setCartVisible] =
    useState(false);
  const [productsInCart, setProducts] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "shopping-cart"
        )
      ) || []
    );
  useEffect(() => {
    localStorage.setItem(
      "shopping-cart",
      JSON.stringify(productsInCart)
    );
  }, [productsInCart]);
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([
      ...productsInCart,
      newProduct,
    ]);
  };

  const changeQuantity = (
    productId,
    count
  ) => {
    setProducts((oldState) => {
      const productsIndex =
        oldState.findIndex(
          (item) =>
            item.id === productId
        );
      if (productsIndex !== -1) {
        oldState[productsIndex].count =
          count;
      }
      return [...oldState];
    });
  };

  const removeProduct = (product) => {
    setProducts((oldState) => {
      const productsIndex =
        oldState.findIndex(
          (item) =>
            item.id === product.id
        );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  return (
    <div className="App">
      <ShoppingCart
        visibilty={cartsVisibilty}
        products={productsInCart}
        onClose={() =>
          setCartVisible(false)
        }
        changeQuantity={
          changeQuantity
        }
        removeProduct={removeProduct}
      />
      <div className="navbar">
        <h3 className="logo">Logo</h3>
        <button
          className="btn shopping-cart-btn"
          onClick={() =>
            setCartVisible(true)
          }>
          <GiShoppingBag size={24} />
          {productsInCart.length >
            0 && (
              <span className="product-count">
                {
                  productsInCart.length
                }
              </span>
            )}
        </button>
      </div>
      <main>
        <h2 className="title">
          Products
        </h2>
        <div className="products">
          {products.map((product) => (
            <div
              className="product"
              key={product.id}>
              <img
                className="product-image"
                src={
                  product.image
                }
                alt={
                  product.image
                }
              />
              <h4 className="product-name">
                {product.name}
              </h4>
              <RatingStars
                rating={
                  product.rating
                }
              />
              <p>
                {
                  product.description
                }
              </p>
              <span className="product-price">
                {product.price}$
              </span>
              <div className="buttons">
                <button className="btn">
                  Detail
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    addProductToCart(
                      product
                    )
                  }>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
/* <footer>
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
</footer> */

export default App;
