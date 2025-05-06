import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Registration.css';
import checkReg from '../../assets/images/icons/check_reg.svg';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'male',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setFormData({
      firstName: '',
      lastName: '',
      gender: 'male',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="registration-page">
      <Header />
      
      <div className="top-head center">
        <h2 className="top-head__heading">REGISTRATION</h2>
      </div>
      
      <div className="content center">
        <div className="content__left">
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="person">
              <h3 className="person__title">Your Name</h3>
              <div className="person__form">
                <input 
                  className="person__input" 
                  type="text" 
                  placeholder="First Name" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input 
                  className="person__input" 
                  type="text" 
                  placeholder="Last Name" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="gender">
              <div className="gender__form">
                <label className="gender__label">
                  <input 
                    className="gender__radio" 
                    type="radio" 
                    name="gender" 
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                  />
                  <span className="gender__text">Male</span>
                </label>
                <label className="gender__label">
                  <input 
                    className="gender__radio" 
                    type="radio" 
                    name="gender" 
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                  />
                  <span className="gender__text">Female</span>
                </label>
                <label className="gender__label__tablet_mobile">
                  <input 
                    className="gender__radio" 
                    type="radio" 
                    name="gender" 
                    value="other"
                    checked={formData.gender === 'other'}
                    onChange={handleChange}
                  />
                  <span className="gender__text">Other</span>
                </label>
              </div>
            </div>
            
            <div className="login">
              <h3 className="login__title">Login details</h3>
              <div className="login__form">
                <input 
                  className="login__input" 
                  type="email" 
                  placeholder="Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input 
                  className="login__input" 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <p className="login__text">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</p>
                <button type="submit" className="join">
                      <span className="join__text">JOIN NOW</span>
                      <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.54 0.208095C11.6058 0.142131 11.684 0.0897967 11.77 0.0540883C11.8561 0.01838 11.9483 0 12.0415 0C12.1347 0 12.2269 0.01838 12.313 0.0540883C12.399 0.0897967 12.4772 0.142131 12.543 0.208095L16.7929 4.458C16.8589 4.5238 16.9112 4.60196 16.9469 4.68802C16.9826 4.77407 17.001 4.86632 17.001 4.95949C17.001 5.05266 16.9826 5.14491 16.9469 5.23097C16.9112 5.31702 16.8589 5.39518 16.7929 5.46098L12.543 9.71089C12.41 9.84389 12.2296 9.91861 12.0415 9.91861C11.8534 9.91861 11.673 9.84389 11.54 9.71089C11.407 9.57788 11.3323 9.39749 11.3323 9.2094C11.3323 9.0213 11.407 8.84091 11.54 8.70791L15.2898 4.95949L11.54 1.21107C11.474 1.14528 11.4217 1.06711 11.386 0.981059C11.3503 0.895005 11.3319 0.802752 11.3319 0.709584C11.3319 0.616415 11.3503 0.524162 11.386 0.438109C11.4217 0.352055 11.474 0.273891 11.54 0.208095Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M0 4.95948C0 4.77162 0.0746263 4.59146 0.207462 4.45862C0.340297 4.32579 0.52046 4.25116 0.708318 4.25116H15.583C15.7708 4.25116 15.951 4.32579 16.0838 4.45862C16.2167 4.59146 16.2913 4.77162 16.2913 4.95948C16.2913 5.14734 16.2167 5.3275 16.0838 5.46033C15.951 5.59317 15.7708 5.6678 15.583 5.6678H0.708318C0.52046 5.6678 0.340297 5.59317 0.207462 5.46033C0.0746263 5.3275 0 5.14734 0 4.95948Z" fill="white"/>
                      </svg>        
                  </button>
              </div>
            </div>
          </form>
        </div>
        
        <div class="content__right">
            <div class="loyalty">
                <div class="loyalty__title">LOYALTY HAS ITS PERKS</div>
                <div class="loyalty__text">Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</div>
                <div class="loyalty__list">
                    <div class="loyalty__item">
                    <img src={checkReg} alt="check" />15% off welcome offer</div>
                    <div class="loyalty__item">
                    <img src={checkReg} alt="check" />Free shipping, returns and exchanges on all orders</div>
                    <div class="loyalty__item">
                    <img src={checkReg} alt="check" />$10 off a purchase on your birthday</div>
                    <div class="loyalty__item">
                    <img src={checkReg} alt="check" />Early access to products</div>
                    <div class="loyalty__item">
                    <img src={checkReg} alt="check" />Exclusive offers & rewards</div>
                </div>
            </div>
        </div>
        </div>
      <Footer />
    </div>
  );
};

export default Registration;
