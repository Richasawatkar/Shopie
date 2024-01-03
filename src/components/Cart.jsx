import React, { useState } from 'react';
import '../styles/Cart.css';

const Cart = ({ cart, setCart }) => {
    const [price, setPrice] = useState(0);

    const [quantities, setQuantities] = useState({});

    const handlePlus = (item) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [item.id]: (prevQuantities[item.id] || 0) + 1,
        }));
        setPrice((prevPrice) => prevPrice + item.price);
    }

    const handleMinus = (item) => {
        if (quantities[item.id] > 0) {
            setQuantities((prevQuantities) => ({
                ...prevQuantities,
                [item.id]: prevQuantities[item.id] - 1,
            }));
            setPrice((prevPrice) => prevPrice - item.price);
        }
    }

    const handleRemove = (item) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== item.id));
    
        setQuantities((prevQuantities) => {
            const { [item.id]: removedQuantity, ...rest } = prevQuantities;
            return rest;
        });
    
        setPrice((prevPrice) => prevPrice - item.price * (quantities[item.id] || 0));
    }
    

    return (
        <div className="cart-container">
          <article>
            {cart?.map((item) => (
              <div className="cart-box" key={item.id}>
                <div className="cart-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="cart-details">
                  <p>{item.title}</p>
                  <p>Quantity: {quantities[item.id] || 0}</p>
                  <div className="quantity-buttons">
                    <button onClick={() => handlePlus(item)}>+</button>
                    <button onClick={() => handleMinus(item)}>-</button>
                  </div>
                </div>
                <div>
                  <span>${item.price}</span>
                  <button className="remove-button" onClick={() => handleRemove(item)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="total-price">
              <span>Total price of your cart: </span>
              <span>${price}</span>
            </div>
          </article>
        </div>
      );
}

export default Cart;
