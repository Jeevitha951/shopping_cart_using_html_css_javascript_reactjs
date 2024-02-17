// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
