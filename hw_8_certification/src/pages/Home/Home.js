import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';
import './Home.css';
import photo5 from '../../assets/images/products/photo_5.png';
import photo6 from '../../assets/images/products/photo_6.png';
import photo7 from '../../assets/images/products/photo_7.png';
import photo8 from '../../assets/images/products/photo_8.png';
import photo9 from '../../assets/images/products/photo_9.png';
import photo10 from '../../assets/images/products/photo_10.png';
import manImg from '../../assets/images/peoples/man.png';
import photo1Desk from '../../assets/images/products/photo_1_desktop.png';
import photo2Desk from '../../assets/images/products/photo_2_desktop.png';
import photo3Desk from '../../assets/images/products/photo_3_desktop.png';
import photoBigDesk from '../../assets/images/products/photo_big_desktop.png';
import overlayBigDesk from '../../assets/images/products/overlay_big_desktop.png';
import icon6 from '../../assets/images/icons/icon_6.svg';
import icon7 from '../../assets/images/icons/icon_7.svg';
import icon8 from '../../assets/images/icons/icon_8.svg';
import rectangle from '../../assets/images/icons/rectangle.svg';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dummyProducts = [
      {
        id: 1,
        image: photo5,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 52.00
      },
      {
        id: 2,
        image: photo6,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 52.00
      },
      {
        id: 3,
        image: photo7,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 52.00
      },
      {
        id: 4,
        image: photo8,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 52.00
      },
      {
        id: 5,
        image: photo9,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 52.00
      },
      {
        id: 6,
        image: photo10,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 52.00
      }
    ];
    
    setProducts(dummyProducts);
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="top">
        <div className="top__content">
          <img src={manImg} alt="man" className="top__content__img__man" />
          <div className="top__content__title">
            <div className="top__content__top__rectangle">
              <img src={rectangle} alt="rectangle" className="top__content__top__rectangle" />
            </div>
            <div className="top__content__title__text">
              <h1 className="top__content__title__title">THE BRAND</h1>
              <h2 className="top__content__title__small">OF LUXERIOUS <span className="top__content__title__h2__pink">FASHION</span></h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="offer center">
        <div className="offer__item">
          <img src={photo1Desk} alt="photo_1_desktop" />
          <div className="offer__text">
            <h4 className="offer__h4__text">30% OFF</h4>
            <span className="offer__h2__text">FOR WOMEN</span>
          </div>
        </div>
        <div className="offer__item">
          <img src={photo2Desk} alt="photo_2_desktop" />
          <div className="offer__text">
            <h4 className="offer__h4__text">HOT DEAL</h4>
            <span className="offer__h2__text">FOR MEN</span>
          </div>
        </div>
        <div className="offer__item">
          <img src={photo3Desk} alt="photo_3_desktop" />
          <div className="offer__text">
            <h4 className="offer__h4__text">NEW ARRIVALS</h4>
            <span className="offer__h2__text">FOR KIDS</span>
          </div>
        </div>
        <div className="offer__item__big">
          <img src={photoBigDesk} alt="photo_4" />
          <div className="offer__overlay__desktop__big">
            <img src={overlayBigDesk} alt="overlay__desktop__big" />
          </div>
          <div className="offer__text__big">
            <h4 className="offer__h4__text__big">LUXIEOUS & TRENDY</h4>
            <span className="offer__h2__text__big">ACCESORIES</span>
          </div>
        </div>
      </div>
      
      <div className="products center">
        <div className="products__title__products">
          <h3 className="products__h3__products__title">Featured Items</h3>
          <p className="products__text__products">Shop for items based on what we featured in this week</p>
        </div>
        <div className="sales">
          {products.map(product => (
            <Product 
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
      
      <div className="button center">
        <Link className="button__browse" to="/catalog-men">Browse All Product</Link>
      </div>
      
      <div className="perks center">
        <div className="perks__item">
          <div className="perks__icon__6">
            <img src={icon6} alt="icon_6" />
          </div>
          <div className="perks__title">
            <p className="perks__name">Free Delivery</p>
            <p className="perks__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
        </div>
        <div className="perks__item">
          <div className="perks__icon__7">
            <img src={icon7} alt="icon_7" />
          </div>
          <div className="perks__title">
            <p className="perks__name">Sales & discounts</p>
            <p className="perks__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
        </div>
        <div className="perks__item">
          <div className="perks__icon__8">
            <img src={icon8} alt="icon_8" />
          </div>
          <div className="perks__title">
            <p className="perks__name">Quality assurance</p>
            <p className="perks__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
