import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';
import './CatalogMen.css';
import photo1 from '../../assets/images/products/photo_1.jpg';
import photo2 from '../../assets/images/products/photo_2.jpg';
import photo3 from '../../assets/images/products/photo_3.jpg';
import photo4 from '../../assets/images/products/photo_4.jpg';
import photo5 from '../../assets/images/products/photo_5.jpg';
import photo6 from '../../assets/images/products/photo_6.jpg';
import photo7 from '../../assets/images/products/photo_7.jpg';
import photo8 from '../../assets/images/products/photo_8.jpg';
import photo9 from '../../assets/images/products/photo_9.jpg';
import Perks from '../../components/Perks/Perks';

const CatalogMen = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    const dummyProducts = [
      {
        id: 10,
        image: photo1,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: "52.00",
        size: "S"
      },
      {
        id: 11,
        image: photo2,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: "52.00",
        size: "M"
      },
      {
        id: 12,
        image: photo3,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: "52.00",
        size: "L"
      },
      {
        id: 13,
        image: photo4,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: "52.00",
        size: "XS"
      },
      {
        id: 14,
        image: photo5,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: "52.00",
        size: "S"
      },
      {
        id: 15,
        image: photo6,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: "52.00",
        size: "M"
      },
      {
        id: 16,
        image: photo7,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: "52.00",
        size: "L"
      },
      {
        id: 17,
        image: photo8,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: "52.00",
        size: "XS"
      },
      {
        id: 18,
        image: photo9,
        name: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: "52.00",
        size: "M"
      }
    ];
    
    setProducts(dummyProducts);
    setFilteredProducts(dummyProducts);
  }, []);

  const handleSizeChange = (size) => {
    const sizeIndex = selectedSizes.indexOf(size);
    let newSelectedSizes = [...selectedSizes];
    
    if (sizeIndex === -1) {
      newSelectedSizes.push(size);
    } else {
      newSelectedSizes.splice(sizeIndex, 1);
    }
    
    setSelectedSizes(newSelectedSizes);
    
    if (newSelectedSizes.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => newSelectedSizes.includes(product.size));
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="catalog-men">
      <Header />
      <>
      <nav>
        <div className="top-head center">
            <div className="top-head__heading">
                NEW ARRIVALS
            </div>
            <nav className="top-head__breadcrumbs">
                <div className="top-head__breadcrumbs__box"><Link to="/" className="top-head__breadcrumbs__link">HOME</Link></div>
                <div className="top-head__breadcrumbs__box"><Link to="/catalog-men" className="top-head__breadcrumbs__link">MEN</Link></div>
                <div className="top-head__breadcrumbs__box"><Link to="/catalog-men" className="top-head__breadcrumbs__link">NEW ARRIVALS</Link></div>
            </nav>
        </div>
    </nav>
    <div>
        <div className="filter-sort center">
            <div className="filter__wrapper">
                <details className="filter">
                    <summary className="filter__summary"><span className="filter__heading">FILTER</span><svg width="15" height="10"
                            viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                                fill="black" />
                        </svg>
                    </summary>
                    <div className="filter__content">
                        <details open className="filter__item">
                            <summary className="filter__head">CATEGORY</summary>
                            <div className="filter__link-box">
                                <a href="#" className="filter__link">Accessories</a>
                                <a href="#" className="filter__link">Bags</a>
                                <a href="#" className="filter__link">Denim</a>
                                <a href="#" className="filter__link">Hoodies & Sweatshirts</a>
                                <a href="#" className="filter__link">Jackets & Coats</a>
                                <a href="#" className="filter__link">Polos</a>
                                <a href="#" className="filter__link">Shirts</a>
                                <a href="#" className="filter__link">Shoes</a>
                                <a href="#" className="filter__link">Sweaters & Knits</a>
                                <a href="#" className="filter__link">T-Shirts</a>
                                <a href="#" className="filter__link">Tanks</a>
                            </div>
                        </details>
                        <details className="filter__item">
                            <summary className="filter__head">BRAND</summary>
                            <div className="filter__link-box">
                                <a href="#" className="filter__link">Louis Vuitton</a>
                                <a href="#" className="filter__link">Prada</a>
                                <a href="#" className="filter__link">Gucci</a>
                                <a href="#" className="filter__link">Chanel</a>
                                <a href="#" className="filter__link">Dior</a>
                                <a href="#" className="filter__link">Yves Saint Laurent</a>
                                <a href="#" className="filter__link">Hermes</a>
                                <a href="#" className="filter__link">Fendi</a>
                                <a href="#" className="filter__link">Balenciaga</a>
                                <a href="#" className="filter__link">Balmain</a>
                                <a href="#" className="filter__link">DOLCE & GABBANA</a>
                            </div>
                        </details>
                        <details className="filter__item">
                            <summary className="filter__head">DESIGNER</summary>
                            <div className="filter__link-box">
                                <a href="#" className="filter__link">Accessories</a>
                                <a href="#" className="filter__link">Bags</a>
                                <a href="#" className="filter__link">Denim</a>
                                <a href="#" className="filter__link">Hoodies & Sweatshirts</a>
                                <a href="#" className="filter__link">Jackets & Coats</a>
                                <a href="#" className="filter__link">Polos</a>
                                <a href="#" className="filter__link">Shirts</a>
                                <a href="#" className="filter__link">Shoes</a>
                                <a href="#" className="filter__link">Sweaters & Knits</a>
                                <a href="#" className="filter__link">T-Shirts</a>
                                <a href="#" className="filter__link">Tanks</a>
                            </div>
                        </details>
                    </div>
                </details>
            </div>
            
        <div className="sort">
            <details className="sort__details">
                <summary className="sort__summary"><span className="sort__head">TRENDING NOW</span><svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z" fill="#6F6E6E"/>
                    </svg>
                </summary>
            </details>
            <details className="sort__details">
                <summary className="sort__summary"><span className="sort__head">SIZE</span><svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z" fill="#6F6E6E"/>
                    </svg>
                </summary>
                <div className="sort__content">
                    <div className="sort__check">
                        <input 
                          id="sort__check1" 
                          type="checkbox" 
                          checked={selectedSizes.includes('XS')}
                          onChange={() => handleSizeChange('XS')}
                        />
                        <label htmlFor="sort__check1">XS</label>
                    </div>
                    <div className="sort__check">
                        <input 
                          id="sort__check2" 
                          type="checkbox" 
                          checked={selectedSizes.includes('S')}
                          onChange={() => handleSizeChange('S')}
                        />
                        <label htmlFor="sort__check2">S</label>
                    </div>
                    <div className="sort__check">
                        <input 
                          id="sort__check3" 
                          type="checkbox" 
                          checked={selectedSizes.includes('M')}
                          onChange={() => handleSizeChange('M')}
                        />
                        <label htmlFor="sort__check3">M</label>
                    </div>
                    <div className="sort__check">
                        <input 
                          id="sort__check4" 
                          type="checkbox" 
                          checked={selectedSizes.includes('L')}
                          onChange={() => handleSizeChange('L')}
                        />
                        <label htmlFor="sort__check4">L</label>
                    </div>
                </div>
            </details>
            <details className="sort__details">
                <summary className="sort__summary"><span className="sort__head">PRICE</span><svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z" fill="#6F6E6E"/>
                    </svg>
                </summary>
            </details>
        </div>
        </div>
    </div>
        <div className="sales center">
          {filteredProducts.map(product => (
            <Product 
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              size={product.size}
            />
          ))}
        </div>
        
        <div className="sales__slider">
          <div className="sales__slider__page">
            <div className="sales__slider__button">
                <svg className="sales__slider__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.995 2L2.995 7L7.995 12L6.995 14L-0.00500488 7L6.995 0L7.995 2Z" fill="#6F6E6E"/>
                </svg>
            </div>
            <div className="sales__slider__numbering">
                <a href="#" className="sales__slider__numbering__link"><span className="sales__slider__1">1</span></a>
                <a href="#" className="sales__slider__numbering__link">2</a>
                <a href="#" className="sales__slider__numbering__link">3</a>
                <a href="#" className="sales__slider__numbering__link">4</a>
                <a href="#" className="sales__slider__numbering__link">5</a>
                <a href="#" className="sales__slider__numbering__link">6</a>
                <a href="#" className="sales__slider__numbering__link">...</a>
                <a href="#" className="sales__slider__numbering__link">20</a>
            </div>
            <div className="sales__slider__button">
                <svg className="sales__slider__arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z" fill="#6F6E6E"/>
                </svg>
            </div>
        </div>
      </div>
    </>
      <Perks />
      <Footer />
    </div>
  );
};

export default CatalogMen;