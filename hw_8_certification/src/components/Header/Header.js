import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import cartIcon from '../../assets/images/icons/icon_5.svg';
import registration from '../../assets/images/icons/icon_4.svg';
import icon1 from '../../assets/images/icons/icon_1.svg';
import icon2 from '../../assets/images/icons/icon_2.svg';
import icon3 from '../../assets/images/icons/icon_3.svg';

const Header = () => {
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const cartCount = document.querySelector('.header__cart-count');
      if (cartCount) {
        cartCount.textContent = cart.length > 0 ? cart.reduce((sum, item) => sum + Number(item.quantity), 0) : '0';
      }
    };

    updateCartCount();
  }, []);

  return (
    <div className="header center">
      <div className="header__img">
        <div className="header__img__left">
          <Link to="/"><img className="header__logo" src={icon1} alt="icon_1" /></Link>
          <a href="#"><img className="header__search" src={icon2} alt="icon_2" /></a>
        </div>
        <div className="header__img__right">
          <div className="header__dropdown__menu">
            <input type="checkbox" id="burger-toggle" className="header__burger-input" />
            <label htmlFor="burger-toggle" className="header__btn__dropdown">
              <img className="header__btn__header" src={icon3} alt="icon_3" />
            </label>
            <nav className="header__menu__content">
              <div className="header__dropdown__menu__title__wrapper">
                <Link to="/cart" className="header__dropdown__menu__link">CART</Link>
                <Link to="/registration" className="header__dropdown__menu__link">REGISTRATION</Link>
              </div>
              <h3 className="header__dropdown__menu__title">MENU</h3>
              <ul className="header__title__menu">
                <li className="header__title__name">
                  <Link className="header__title__name__link" to="/catalog-men">MAN</Link>
                </li>
                <li className="header__name"><a className="header__name__link" href="#">Accessories</a></li>
                <li className="header__name"><a className="header__name__link" href="#">Bags</a></li>
                <li className="header__name"><a className="header__name__link" href="#">Denim</a></li>
                <li className="header__name"><a className="header__name__link" href="#">T-Shirts</a></li>
                <li className="header__title__name">
                  <Link className="header__title__name__link" to="/catalog-women">WOMAN</Link>
                </li>
                <li className="header__name"><a className="header__name__link" href="#">Accessories</a></li>
                <li className="header__name"><a className="header__name__link" href="#">Jackets & Coats</a></li>
                <li className="header__name"><a className="header__name__link" href="#">Polos</a></li>
                <li className="header__name"><a className="header__name__link" href="#">T-Shirts</a></li>
                <li className="header__name"><a className="header__name__link" href="#">Shirts</a></li>
                <li className="header__title__name">
                  <a className="header__title__name__link" href="#">KIDS</a>
                </li>
                <li className="header__name"><a className="header__name__link" href="#">Accessories</a></li>
                <li className="header__name"><a className="header__name__link" href="#">Jackets & Coats</a></li>
                <li className="header__name"><a className="header__name__link" href="#">Polos</a></li>
                <li className="header__name"><a className="header__name__link" href="#">T-Shirts</a></li>
                <li className="header__name"><a className="header__name__link" href="#">Shirts</a></li>
                <li className="header__name"><a className="header__name__link" href="#">Bags</a></li>
              </ul>
            </nav>
          </div>
          <Link to="/registration">
            <img className="header__icon__4" src={registration} alt="icon_4" />
          </Link>
          <div className="header__cart">
            <Link className="header__number" to="/cart">
              <img src={cartIcon} alt="icon_5" />
              <span className="header__cart-count">0</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
