import React from 'react';
import ".. style/ShoppingCart.css";
import { AiFillcloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
    visibility,
    products,
    removeProduct,
    removeAllProducts,
    total,
    onClose,
    changeQuantity,
}) {
    return (<div
        className="modal"
        style={{
            display: visibility ?
                "block" : "none",
        }}>
        <div className='header'>
            <h2>Shopping Cart</h2>
            <button className='btn close-btn' onClick={onClose}>
                <AiFillcloseCircle size={40} />
            </button>
        </div>
        <div className='cart-products'>
            {products.lenght === 0 && (
                <span className='empty-text'>Your cart is empty
                </span>
            )}
            {products.map((product) => (product => (
                <div className='cart-product' key={product.id}>
                    <img src={product.image}
                        alt={product.name}
                    />
                    <div className="product-info">
                        <h3>{product.name}</h3>
                        <span className="product-price">

                            {product.price * product.count}$
                        </span>

                    </div>
                    <select className='count'
                        value={
                            product.count
                        } onChange={(event) => {
                            changeQuantity(
                                product.id,
                                event.target.value
                            );
                        }}>
                        {[
                            ...Array(
                                10
                            ).keys(),
                        ].map(
                            (number) => {
                                const num =
                                    number +
                                    1;
                                return (
                                    <option
                                        value={
                                            num
                                        }
                                        key={
                                            num
                                        }>
                                        {
                                            num
                                        }
                                    </option>
                                );
                            }
                        )}
                    </select>
                </div>
                            
			</div>
    </div>
    );
}

export default ShoppingCart;