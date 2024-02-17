// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1,img:"https://www.alderandgreen.com/cdn/shop/products/AGCSH10018-ES_61_1200x.jpg?v=1638452274", name: 'Oxford Shirts', price: 1200, quantity: 3 },
    { id: 2, img:"https://assets.ajio.com/medias/sys_master/root/20230629/CXfR/649d0423eebac147fc38afad/-473Wx593H-466173772-white-MODEL.jpg",name: 'Tunic', price: 459, quantity: 1 },
    { id: 3,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RSWYe-oMPCtrzsGHJ2zRMw8nouLa3a8T7A&usqp=CAU", name: 'Short Sleeve Shirt', price: 800, quantity: 4 }
  ]);

  const handleIncrement = (id) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleDecrement = (id) => {
    const updatedProducts = products.map(product => {
      if (product.id === id && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleAddToCart = (id) => {
    // Add your logic to add the product to the cart
    console.log(`Product with ID ${id} added to cart`);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="categories">
          {/* Add your category filter options here */}
        </div>
      </nav>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt='txt'/>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(product.id)}>-</button>
                <button onClick={() => handleIncrement(product.id)}>+</button>
              </div>
              <div class="box">
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
