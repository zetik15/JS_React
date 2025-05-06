import React from 'react';
import './Product.css';
import addToCart from '../../assets/images/icons/add_to_cart.svg';
import overlayDeskProd from '../../assets/images/products/overlay_desktop_products.png';

const Product = ({ id, image, name, description, price, onAddToCart }) => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingItemIndex = cart.findIndex(item => item.id === id);
    
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      const imageUrl = typeof image === 'string' ? image : image.toString();
      
      cart.push({
        id,
        image: imageUrl,
        name,
        description,
        price,
        quantity: 1,
        color: 'Red',
        size: 'XL'
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    const updateCartCount = () => {
      const cartCount = document.querySelector('.header__cart-count');
      if (cartCount) {
        cartCount.textContent = cart.length > 0 ? cart.reduce((sum, item) => sum + Number(item.quantity), 0) : '0';
      }
    };
    
    updateCartCount();
    
    if (onAddToCart) {
      onAddToCart(id);
    }
  };

  return (
    <div className="sales__item">
      <div className="sales__product__img__container">
        <img className="sales__photo__products" src={image} alt={name} />
        <img 
          className="sales__overlay__desktop__products" 
          src={overlayDeskProd} 
          alt="overlay_desktop" 
        />
        <div className="sales__btn">
          <button className="sales__btn__add" onClick={handleAddToCart}>
            <img className="sales__cart__icon" src={addToCart} alt="add_to_cart" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="sales__title">
        <p className="sales__name">{name}</p>
        <p className="sales__desc">{description}</p>
        <p className="sales__price">${typeof price === 'string' ? price : price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
