import React from "react";
import "../style/shoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
    visibilty,
    products,
    removeProduct,
    onClose,
    changeQuantity,
}) {
    return (
        <div
            className="modal"
            style={{
                display: visibilty
                    ? "block"
                    : "none",
            }}>
            <div className="shoppingCart">
                <div className="header">
                    <h2>Carrinho de compra</h2>
                    <button
                        className="btn close-btn"
                        onClick={onClose}>
                        <AiFillCloseCircle
                            size={30}                        />
                    </button>
                </div>
                <div className="cart-products">
                    {products.length === 0 && (
                        <span className="empty-text">
                            Seu carrinho está vazinho
                        </span>
                    )}
                    {products.map((product) => (
                        <div
                            className="cart-product"
                            key={product.id}>
                            <img
                                src={ product.image}
                                alt={product.name}
                            />
                            <div className="product-info">
                                <h3>
                                    {product.name}
                                </h3>
                                <span className="product-price">
                                    R$
                                    {product.price * product.count}
                                </span>
                            </div>
                            <select
                                className="count"
                                value={
                                    product.count
                                }
                                onChange={(event) => {
                                    changeQuantity(
                                        product.id,
                                        event
                                            .target
                                            .value
                                    );
                                }}>
                                {[
                                    ...Array(10).keys(),
                                ].map((number) => {
                                    const num = number + 1;
                                    return (
                                        <option
                                            value={num}
                                            key={num}>
                                            {num}
                                        </option>
                                    );
                                }
                                )}
                            </select>
                            <button
                                className="btn remove-btn"
                                onClick={() =>
                                    removeProduct( product
                                    )
                                }>
                                <RiDeleteBin6Line
                                    size={30}
                                />
                            </button>
                        </div>
                    ))}
                    {products.length > 0 && (
                        <button className="btn checkout-btn">
                            Seguindo para o checkout
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;