import React, { useState } from 'react';
import './Shop.css';

function Shop() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'Premium Headphones',
      price: 299.99,
      category: 'electronics',
      image: '🎧',
      rating: 4.8,
      reviews: 234,
      description: 'High-quality wireless headphones with noise cancellation'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 399.99,
      category: 'electronics',
      image: '⌚',
      rating: 4.6,
      reviews: 189,
      description: 'Feature-rich smartwatch with health tracking'
    },
    {
      id: 3,
      name: 'Designer Backpack',
      price: 89.99,
      category: 'fashion',
      image: '🎒',
      rating: 4.7,
      reviews: 156,
      description: 'Stylish and durable backpack for everyday use'
    },
    {
      id: 4,
      name: 'Wireless Keyboard',
      price: 129.99,
      category: 'electronics',
      image: '⌨️',
      rating: 4.5,
      reviews: 203,
      description: 'Mechanical keyboard with RGB lighting'
    },
    {
      id: 5,
      name: 'Running Shoes',
      price: 149.99,
      category: 'fashion',
      image: '👟',
      rating: 4.9,
      reviews: 312,
      description: 'Comfortable running shoes with advanced cushioning'
    },
    {
      id: 6,
      name: 'Coffee Maker',
      price: 179.99,
      category: 'home',
      image: '☕',
      rating: 4.4,
      reviews: 145,
      description: 'Automatic coffee maker with programmable settings'
    },
    {
      id: 7,
      name: 'Yoga Mat',
      price: 49.99,
      category: 'sports',
      image: '🧘',
      rating: 4.6,
      reviews: 278,
      description: 'Non-slip yoga mat with carrying strap'
    },
    {
      id: 8,
      name: 'Gaming Mouse',
      price: 79.99,
      category: 'electronics',
      image: '🖱️',
      rating: 4.7,
      reviews: 421,
      description: 'High-precision gaming mouse with customizable buttons'
    },
    {
      id: 9,
      name: 'Sunglasses',
      price: 159.99,
      category: 'fashion',
      image: '🕶️',
      rating: 4.5,
      reviews: 167,
      description: 'UV protection sunglasses with polarized lenses'
    },
    {
      id: 10,
      name: 'Desk Lamp',
      price: 69.99,
      category: 'home',
      image: '💡',
      rating: 4.3,
      reviews: 98,
      description: 'LED desk lamp with adjustable brightness'
    },
    {
      id: 11,
      name: 'Bluetooth Speaker',
      price: 119.99,
      category: 'electronics',
      image: '🔊',
      rating: 4.8,
      reviews: 356,
      description: 'Portable speaker with 360° sound'
    },
    {
      id: 12,
      name: 'Fitness Tracker',
      price: 99.99,
      category: 'sports',
      image: '📊',
      rating: 4.4,
      reviews: 223,
      description: 'Track your workouts and daily activity'
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const filteredProducts = products.filter(product => {
    const matchesFilter = filter === 'all' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>🛍️ Shop</h1>
        <p>Discover amazing products at great prices</p>
      </div>

      <div className="shop-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'electronics' ? 'active' : ''} 
            onClick={() => setFilter('electronics')}
          >
            Electronics
          </button>
          <button 
            className={filter === 'fashion' ? 'active' : ''} 
            onClick={() => setFilter('fashion')}
          >
            Fashion
          </button>
          <button 
            className={filter === 'home' ? 'active' : ''} 
            onClick={() => setFilter('home')}
          >
            Home
          </button>
          <button 
            className={filter === 'sports' ? 'active' : ''} 
            onClick={() => setFilter('sports')}
          >
            Sports
          </button>
        </div>

        <div className="cart-summary">
          <span>🛒 Cart: {cart.length} items</span>
          <span className="cart-total">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-rating">
                <span className="stars">⭐ {product.rating}</span>
                <span className="reviews">({product.reviews} reviews)</span>
              </div>
              <div className="product-footer">
                <span className="price">${product.price}</span>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-panel">
          <h2>Shopping Cart</h2>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span className="cart-item-icon">{item.image}</span>
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price}</span>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total-section">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
