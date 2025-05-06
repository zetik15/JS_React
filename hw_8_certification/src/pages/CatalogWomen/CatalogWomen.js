import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './CatalogWomen.css';
import separatorImg from '../../assets/images/products/separator.jpg';
import photo1 from '../../assets/images/peoples/photo_1.jpg';
import rectangle from '../../assets/images/other/rectangle.png';
import Product from '../../components/Product/Product';
import photo8 from '../../assets/images/products/photo_8.png';
import photo9 from '../../assets/images/products/photo_9.png';
import photo10 from '../../assets/images/products/photo_10.png';

const CatalogWomen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const dummyProducts = [
        {
          id: 10,
          image: photo8,
          name: "ELLERY X M'O CAPSULE",
          description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: "52.00"
        },
        {
          id: 11,
          image: photo9,
          name: "ELLERY X M'O CAPSULE",
          description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: "52.00"
        },
        {
          id: 12,
          image: photo10,
          name: "ELLERY X M'O CAPSULE",
          description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: "52.00"
        }
      ];
      
      setProducts(dummyProducts);
    }, []);

  return (
    <div className="catalog-women">
      <Header />
      <nav>
        <div className="top-head center">
            <div className="top-head__heading">
                NEW ARRIVALS
            </div>
            <nav className="top-head__breadcrumbs">
                <div className="top-head__breadcrumbs__box"><Link to="/" className="top-head__breadcrumbs__link">HOME</Link></div>
                <div className="top-head__breadcrumbs__box"><Link to="/catalog-women" className="top-head__breadcrumbs__link">WOMEN</Link></div>
                <div className="top-head__breadcrumbs__box"><Link to="/catalog-women" className="top-head__breadcrumbs__link">NEW ARRIVALS</Link></div>
            </nav>
        </div>
    </nav>
      <div className="slider-photo center">
        <img src={photo1} alt="photo_1" />
        <div className="slider-photo__arrows">
          <div className="slider-photo__left">
            <a className="slider-photo__rectangle" href="#"><img src={rectangle} alt="rectangle" /></a>
            <a className="slider-photo__arrow" href="#">
              <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z" fill="black"/>
              </svg>
            </a>                
          </div>
          <div className="slider-photo__right">
            <a className="slider-photo__rectangle" href="#"><img src={rectangle} alt="rectangle" /></a>
            <a className="slider-photo__arrow" href="#">
              <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.299805 19.2499L8.0498 11.4999L0.299805 3.7499L1.8498 0.649902L12.6998 11.4999L1.8498 22.3499L0.299805 19.2499Z" fill="black"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <section className="item-details center">
      <div className="item-details__content">
        <h4 className="item-details__collection">WOMEN COLLECTION</h4>
        <img className="item-details__separator" src={separatorImg} alt="separator" />
        <h2 className="item-details__name">MOSCHINO CHEAP AND CHIC</h2>
        <p className="item-details__desc">Compellingly actualize fully researched processes before proactive outsourcing. <br />Progressively syndicate collaborative architectures before cutting-edge services. Completely <br />visualize parallel core competencies rather than exceptional portals.</p>
        <p className="item-details__price">$561</p>
        <div className="item-details__separator__2"></div>
        <div className="item-details__sort">
          <div className="item-details__sort__item">
            <button className="item-details__sort__name">CHOOSE COLOR</button>
            <svg className="item-details__sort__arrow" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z" fill="#6F6E6E"/>
            </svg>                        
          </div>
          <div className="item-details__sort__item">
            <button className="item-details__sort__name">CHOOSE SIZE</button>
            <svg className="item-details__sort__arrow" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z" fill="#6F6E6E"/>
            </svg>
          </div>
          <div className="item-details__sort__item">
            <button className="item-details__sort__name">QUANTITY</button>
            <svg className="item-details__sort__arrow" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.00214 5.64846C4.83521 5.64879 4.67343 5.59016 4.54488 5.48275L0.258102 1.88021C0.112196 1.75791 0.0204417 1.58217 0.00302325 1.39165C-0.0143952 1.20112 0.0439493 1.01143 0.165221 0.864289C0.286493 0.717149 0.460759 0.624619 0.649682 0.607053C0.838605 0.589487 1.02671 0.648325 1.17262 0.770623L5.00214 3.9985L8.83167 0.885905C8.90475 0.826055 8.98884 0.781361 9.0791 0.754391C9.16937 0.727421 9.26403 0.718707 9.35764 0.72875C9.45126 0.738794 9.54198 0.767396 9.6246 0.812913C9.70722 0.85843 9.7801 0.919965 9.83906 0.993981C9.90449 1.06806 9.95405 1.15498 9.98462 1.24927C10.0152 1.34357 10.0261 1.44321 10.0167 1.54197C10.0073 1.64073 9.97784 1.73646 9.93005 1.82318C9.88227 1.9099 9.81723 1.98573 9.73904 2.04592L5.45225 5.52598C5.32002 5.61641 5.16154 5.65954 5.00214 5.64846Z" fill="#6F6E6E"/>
            </svg>
          </div>
        </div>
        <div className="item-details__button">
          <button className="item-details__btn">
            <svg className="item-details__cart" width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.49847 22.185C5.50635 21.752 5.64091 21.3309 5.88519 20.9748C6.12947 20.6186 6.47261 20.3431 6.87158 20.1828C7.27055 20.0226 7.7076 19.9848 8.12781 20.0741C8.54802 20.1635 8.93269 20.376 9.23358 20.685C9.53447 20.994 9.73817 21.3857 9.81909 21.811C9.90002 22.2363 9.85453 22.6763 9.68842 23.0756C9.52231 23.475 9.24296 23.8161 8.88538 24.0559C8.52779 24.2957 8.10791 24.4237 7.67847 24.4237C7.38955 24.4211 7.10399 24.3611 6.83807 24.2472C6.57216 24.1333 6.3311 23.9676 6.12866 23.7597C5.92623 23.5518 5.76639 23.3057 5.65826 23.0355C5.55013 22.7653 5.49584 22.4763 5.49847 22.185ZM21.3045 24.4237C20.8711 24.4303 20.4453 24.3087 20.0797 24.074C19.7141 23.8393 19.4247 23.5017 19.2471 23.103C19.0696 22.7042 19.0117 22.2618 19.0806 21.8303C19.1496 21.3988 19.3423 20.9971 19.6351 20.6748C19.9278 20.3524 20.3077 20.1236 20.728 20.0165C21.1482 19.9095 21.5903 19.929 21.9997 20.0724C22.4091 20.2159 22.7679 20.4771 23.0317 20.8238C23.2956 21.1706 23.453 21.5877 23.4845 22.0236C23.5269 22.6155 23.3369 23.2004 22.9555 23.6523C22.7706 23.8745 22.5436 24.0574 22.2877 24.1901C22.0319 24.3227 21.7524 24.4025 21.4655 24.4247L21.3045 24.4237ZM8.59351 17.4855C8.38116 17.4851 8.17488 17.414 8.00671 17.2833C7.83855 17.1525 7.71792 16.9694 7.66351 16.7624L3.73651 2.19527H0.978516C0.719001 2.19527 0.470064 2.09128 0.28656 1.90622C0.103056 1.72116 0 1.47018 0 1.20847C0 0.946764 0.103056 0.695782 0.28656 0.510726C0.470064 0.325669 0.719001 0.22168 0.978516 0.22168H4.45752C4.66982 0.222254 4.876 0.293463 5.04413 0.424184C5.21226 0.554905 5.33295 0.737883 5.38751 0.944787L9.31451 15.5119H20.0185L23.5765 7.12665H11.7185C11.459 7.12665 11.2101 7.02266 11.0266 6.83761C10.8431 6.65255 10.74 6.40157 10.74 6.13986C10.74 5.87815 10.8431 5.62717 11.0266 5.44211C11.2101 5.25705 11.459 5.15306 11.7185 5.15306H25.0535C25.2131 5.15352 25.3701 5.19451 25.5099 5.27223C25.6497 5.34995 25.7679 5.46195 25.8535 5.59784C25.9413 5.73569 25.9945 5.89303 26.0084 6.05627C26.0224 6.21951 25.9966 6.38368 25.9335 6.53465L21.5425 16.8935C21.469 17.0684 21.3462 17.2177 21.1895 17.3229C21.0327 17.4281 20.8488 17.4846 20.6605 17.4855H8.59351Z" fill="#EF5B70"/>
            </svg>
            <span className="item-details__btn__text">
              Add to Cart
            </span>
          </button>              
        </div>
      </div>
    </section>
    <div className="catalog-women-sales center">
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
      <Footer />
    </div>
  );
};

export default CatalogWomen;
