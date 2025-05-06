import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Cart.css';
import defaultProductImg from '../../assets/images/products/photo_8.png';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
    calculateTotal(items);
  }, []);

  const calculateTotal = (items) => {
    let total = 0;
    if (items && items.length > 0) {
      items.forEach(item => {
        const price = typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price;
        const itemTotal = price * item.quantity;
        total += itemTotal;
      });
    }
    setTotalPrice(total);
    return total;
  };

  const updateQuantity = (id, newValue) => {
    newValue = parseInt(newValue);
    
    if (isNaN(newValue)) {
      newValue = 1;
    }
    
    if (newValue < 1) {
      newValue = 1;
    }
    
    if (newValue > 10) {
      newValue = 10;
    }
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newValue } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    updateCartCount(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    updateCartCount(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    setTotalPrice(0);
    updateCartCount([]);
  };

  const updateCartCount = (cart) => {
    const cartCount = document.querySelector('.header__cart-count');
    if (cartCount) {
      if (cart && cart.length > 0) {
        const totalQuantity = cart.reduce((sum, item) => {
          return sum + Number(item.quantity);
        }, 0);
        cartCount.textContent = totalQuantity;
      } else {
        cartCount.textContent = '0';
      }
    }
  };
  
  const handleQuantityChange = (id, value) => {
    const newQuantity = value;
    
    const updatedCart = cartItems.map(cartItem => 
      cartItem.id === id ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    let total = 0;
    updatedCart.forEach(cartItem => {
      const price = typeof cartItem.price === 'string' ? parseFloat(cartItem.price.replace('$', '')) : cartItem.price;
      const itemQuantity = cartItem.quantity === '' ? 0 : parseInt(cartItem.quantity) || 0;
      total += price * itemQuantity;
    });
    
    setTotalPrice(total);
    updateCartCount(updatedCart);
  };

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <div className="cart__empty">Корзина пустая</div>;
    }

    return cartItems.map(item => (
      <div className="cart__item" key={item.id} data-id={item.id}>
        <div className="cart__img">
          <img src={item.image || defaultProductImg} alt={item.name || 'Product'} />
        </div>
        <div className="cart__content">
          <div className="cart__specs">                
            <div className="cart__heading">
              <Link to="#" className="cart__title">{item.name || 'Product Name'}</Link>
            </div>
            <div className="cart__desc">
              <div className="cart__text">Price: <span className="cart__text_select">${parseFloat(item.price).toFixed(2)}</span></div>
              <div className="cart__text">Color: {item.color || 'Red'}</div>
              <div className="cart__text">Size: {item.size || 'XL'}</div>
              <div className="cart__text">
                Quantity: 
                <input 
                  type="number" 
                  value={item.quantity} 
                  min="1" 
                  max="10"
                  step="1"
                  className="cart__number"
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  onBlur={(e) => {
                    let newValue = e.target.value;
                    
                    if (newValue === '' || isNaN(newValue) || parseInt(newValue) < 1) {
                      newValue = 1;
                    } else if (parseInt(newValue) > 10) {
                      newValue = 10;
                    }
                    
                    updateQuantity(item.id, newValue);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="cart__cross" onClick={(e) => {
          e.preventDefault();
          removeItem(item.id);
        }}>
          <svg className="cart__close" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#000000"/>
          </svg>
        </a>
      </div>
    ));
  };

  return (
    <div className="cart-page">
      <Header />
      
      <div className="top-head center">
        <div className="top-head__heading">SHOPPING CART</div>
      </div>
      
      <section className="cart-wrapper center">
        <div className="cart-left">
          <div className="cart">
            {renderCartItems()}
          </div>
          <div className={`cart-actions ${cartItems.length === 0 ? 'cart-actions--empty' : ''}`}>
            {cartItems.length > 0 && (
              <div className="cart-actions__wrapper">
                <a href="#" className="cart-actions__btn" onClick={(e) => {
                  e.preventDefault();
                  clearCart();
                }}>CLEAR SHOPPING CART</a>
              </div>
            )}
            <div className="cart-actions__wrapper">
              <Link className="cart-actions__btn" to="/catalog-men">CONTINUE SHOPPING</Link>
            </div>
          </div>
        </div>
        <div className="cart-wrapper-inner">
          <div className="cart-shipping">
            <div className="cart-shipping__header">
              <h3 className="cart-shipping__title">SHIPPING ADDRESS</h3>
            </div>
            <form className="cart-shipping__form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="cart-shipping__text" required placeholder="Bangladesh" />
              <input type="text" className="cart-shipping__text" required placeholder="State" />
              <input type="text" className="cart-shipping__text" required placeholder="Postcode / ZIP" pattern="[a-zA-Z0-9]*" maxLength="10" />
              <button type="submit" className="cart-shipping__btn">GET A QUOTE</button>
            </form>
          </div>
          <div className="cart-total">
            <div className="cart-total__sub">SUB TOTAL<span className="cart-total__sub__span">${totalPrice.toFixed(2)}</span></div>
            <div className="cart-total__grand">GRAND TOTAL<span className="cart-total__grand__span">${totalPrice.toFixed(2)}</span></div>
            <div className="cart-total__wrapper">
              <button type="submit" className="cart-total__btn">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Cart;
