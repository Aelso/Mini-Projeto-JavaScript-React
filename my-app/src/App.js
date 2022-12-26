import React, {
  useState,
  useEffect,
} from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillLinkedin, AiFillPhone, AiFillGithub, AiFillMail } from "react-icons/ai";
import { RiAliensFill } from "react-icons/ri";
import { FaHandSpock ,FaEarlybirds} from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import { TbMovie } from "react-icons/tb";
import { GiWhiteBook } from "react-icons/gi";



const products = [
  {
    id: 1,
    name: "Funko Pop Kylo Ren",
    rating: 4.5,
    description:
      "Funko Pop! Star Wars · Rise Of Skywalker - Kylo Ren - Supreme Leader #308 ",
    price: 50,
    image: require("./assets/images/product-1.jpg"),
  },
  {
    id: 2,
    name: "Funko Pop Naruto Shippuden Exclusive - Naruto (Sixth Path Sage)",
    rating: 4.2,
    description:
      "Boneco Funko Pop Anime Naruto Shippuden.",
    price: 45,
    image: require("./assets/images/product-2.jpg"),
  },
  {
    id: 3,
    name: "Funko Pop Wonder Woman",
    rating: 4.8,
    description:
      "Boneco Funko Pop Mulher maravilha",
    price: 59,
    image: require("./assets/images/product-3.jpg"),
  },
  {
    id: 4,
    name: "Funko Pop Chapolin Colorado",
    rating: 4.8,
    description:
      "Chapolin Colorado classic Funko Pop",
    price: 69,
    image: require("./assets/images/product-4.jpg"),
  },
  {
    id: 5,
    name: "Funko Pop Demon Slayer",
    rating: 4.5,
    description:
      "Funko Pop Nezuko Kamado Demon Slayer",
    price: 45,
    image: require("./assets/images/product-5.jpg"),
  },
  {
    id: 6,
    name: "Funko Pop Dustin stranger things",
    rating: 3.8,
    description:
      " Funko Pop Dustin stranger things mais legal dele",
    price: 49,
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
        <img src={require("./assets/images/banner.jpg")} alt="logo" />
        <h3 className="logo"> Projeto JavaScript + React |Instituto Nu + Descomplica
</h3>
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
      <header>
        <div className="header">
          <h1 className="Sobre Mim">
            <FaEarlybirds> </FaEarlybirds> Sobre mim:
            <GiWhiteBook> </GiWhiteBook> Eterno estudante.
            <FaHandSpock> </FaHandSpock> Apaixonado por tecnologia e programação.
            <CgGames> </CgGames> Jogador de games.
            <TbMovie> </TbMovie> Amante de filmes e séries.
            <RiAliensFill> </RiAliensFill> Fã de Star Wars.
          </h1>
        </div>
      </header>


      <main>
        <h2 className="title">
          Produtos
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
              R$ {product.price}
              </span>
              <div className="buttons">
                <button className="btn">
                  Detalhes
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    addProductToCart(
                      product
                    )
                  }>
                  Add ao carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <RiAliensFill size={25}> </RiAliensFill> Desenvolvido por Aelso Rocha Brito

          </div>
          <div className="footer-center">
            <p>Para mais informações entre em contato:  </p>
            <AiFillMail ></AiFillMail> aelsus@yahoo.com.br
            <AiFillPhone></AiFillPhone>11-9 9999-9845

          </div>

          <div className="footer-right">
            <div className="social-media">
              <a href="https://facebook.com"><AiFillFacebook
                size={30}
                style={{
                  color: "black",
                  backgroundColor: "snow"
                  
                  }} /> </a>

              <a href="https://www.instagram.com/britoaelso"><AiFillInstagram
                size={30}
                style={{
                  color: "black"
                }} /> </a>

              <a href="https://www.linkedin.com/in/aelso-r-brito/"><AiFillLinkedin
                size={30}
                style={{
                  color: "black"
                }} /> </a>

              <a href="https://github.com/Aelso"><AiFillGithub size={30}
                style={{
                  color: "black"
                }} /> </a>

              <a href="https://www.youtube.com/"><AiFillYoutube
                size={30}
                style={{
                  color: "black"
                }} /> </a>

            </div>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;
