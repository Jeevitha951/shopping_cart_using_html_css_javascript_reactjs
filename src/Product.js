// Product.js
import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={() => addToCart(product)} >Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
