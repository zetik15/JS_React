import React from 'react';
import './Footer.css';
import subscribeBackImg from '../../assets/images/backgrounds/photo_subscribe.png';
import womanSubscribe from '../../assets/images/peoples/woman_subscribe.png';

const Footer = () => {
  return (
    <>
      <div className="subscribe center" style={{ backgroundImage: `url(${subscribeBackImg})`}}>
            <div className="subscribe__quote">
                <div className="subscribe__quote__woman">
                    <img src={womanSubscribe} alt="woman_subscribe" />
                </div>
                <p className="subscribe__quote__text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span className="subscribe__quote__text__italics">a pulvinar purus condimentum“</span></p>
            </div>
            <div className="promotion">
                <div className="promotion__wrapper">
                    <h3 className="promotion__title">SUBSCRIBE</h3>
                <span className="promotion__text">FOR OUR NEWLETTER AND PROMOTION</span>
                </div>
                <div className="promotion__box__email">
                    <form className="promotion__form" action="#">
                        <input className="promotion__email" type="email" required placeholder="Enter Your Email" />
                        <button className="promotion__button__email" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="footer center">
            <div className="footer__rights">
                © 2024  Brand  All Rights Reserved.
            </div>
            <div className="footer__socials">
                <div className="footer__socials__footer">
                    <a className="footer__icon__link" href="#">
                        <div className="footer__rectangle__socials">
                            <svg className="footer__ractangle" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.4506 0H0V32H31.4506V0Z" fill="white"/>
                            </svg>     
                        </div>
                        <div className="footer__icons">
                            <svg className="footer__facebook" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.08836 8.28L8.50686 5.61602H5.89022V3.88729C5.89022 3.15847 6.25574 2.44806 7.42765 2.44806H8.61722V0.179975C8.61722 0.179975 7.53772 0 6.50561 0C4.35073 0 2.9422 1.27593 2.9422 3.5857V5.61602H0.546875V8.28H2.9422V14.72H5.89022V8.28H8.08836Z" fill="black"/>
                            </svg>
                        </div>
                    </a>
                    <a className="footer__icon__link" href="#">
                        <div className="footer__rectangle__socials">
                            <svg className="footer__rectangle" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.4506 0H0V32H31.4506V0Z" fill="white"/>
                            </svg>                                
                        </div>
                        <div className="footer__icons">
                            <svg className="footer__instagram" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.13677 3.68162C6.02163 3.68162 4.31555 5.38494 4.31555 7.49666C4.31555 9.60838 6.02163 11.3117 8.13677 11.3117C10.2519 11.3117 11.958 9.60838 11.958 7.49666C11.958 5.38494 10.2519 3.68162 8.13677 3.68162ZM8.13677 9.97693C6.76991 9.97693 5.65248 8.86463 5.65248 7.49666C5.65248 6.12869 6.76658 5.01639 8.13677 5.01639C9.50695 5.01639 10.6211 6.12869 10.6211 7.49666C10.6211 8.86463 9.50363 9.97693 8.13677 9.97693ZM13.0056 3.52557C13.0056 4.02029 12.6065 4.41541 12.1143 4.41541C11.6188 4.41541 11.223 4.01697 11.223 3.52557C11.223 3.03416 11.6221 2.63572 12.1143 2.63572C12.6065 2.63572 13.0056 3.03416 13.0056 3.52557ZM15.5364 4.42869C15.4799 3.2367 15.2072 2.18084 14.3325 1.31092C13.4612 0.440997 12.4036 0.168732 11.2097 0.108966C9.9792 0.0392395 6.29101 0.0392395 5.0605 0.108966C3.8699 0.165411 2.81233 0.437677 1.93768 1.3076C1.06302 2.17752 0.793639 3.23338 0.733776 4.42537C0.663937 5.65389 0.663937 9.33611 0.733776 10.5646C0.790313 11.7566 1.06302 12.8125 1.93768 13.6824C2.81233 14.5523 3.86658 14.8246 5.0605 14.8844C6.29101 14.9541 9.9792 14.9541 11.2097 14.8844C12.4036 14.8279 13.4612 14.5556 14.3325 13.6824C15.2039 12.8125 15.4766 11.7566 15.5364 10.5646C15.6063 9.33611 15.6063 5.65721 15.5364 4.42869ZM13.9468 11.8828C13.6874 12.5336 13.1852 13.0349 12.53 13.2972C11.5489 13.6857 9.22094 13.5961 8.13677 13.5961C7.05259 13.5961 4.72128 13.6824 3.74353 13.2972C3.09169 13.0383 2.58951 12.5369 2.32678 11.8828C1.93768 10.9033 2.02747 8.57908 2.02747 7.49666C2.02747 6.41424 1.941 4.0867 2.32678 3.11053C2.58619 2.45975 3.08837 1.95838 3.74353 1.69608C4.72461 1.3076 7.05259 1.39725 8.13677 1.39725C9.22094 1.39725 11.5523 1.31092 12.53 1.69608C13.1818 1.95506 13.684 2.45643 13.9468 3.11053C14.3359 4.09002 14.2461 6.41424 14.2461 7.49666C14.2461 8.57908 14.3359 10.9066 13.9468 11.8828Z" fill="black"/>
                            </svg>
                        </div>
                    </a>
                    <a className="footer__icon__link" href="#">
                        <div className="footer__rectangle__socials">
                            <svg className="footer__rectangle" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.4506 0H0V32H31.4506V0Z" fill="white"/>
                            </svg>                                
                        </div>
                        <div className="footer__icons">
                            <svg className="footer__pinterest" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.7402 0.203125C3.55552 0.203125 0.408081 2.34063 0.408081 5.8C0.408081 8 1.63726 9.25 2.38221 9.25C2.68951 9.25 2.86643 8.3875 2.86643 8.14375C2.86643 7.85313 2.13079 7.23438 2.13079 6.025C2.13079 3.5125 4.03043 1.73125 6.48878 1.73125C8.60259 1.73125 10.167 2.94062 10.167 5.1625C10.167 6.82187 9.50585 9.93437 7.3641 9.93437C6.59121 9.93437 5.93006 9.37187 5.93006 8.56563C5.93006 7.38438 6.74951 6.24062 6.74951 5.02187C6.74951 2.95312 3.83487 3.32812 3.83487 5.82812C3.83487 6.35313 3.90006 6.93437 4.13286 7.4125C3.70451 9.26875 2.82919 12.0344 2.82919 13.9469C2.82919 14.5375 2.91299 15.1188 2.96886 15.7094C3.0744 15.8281 3.02163 15.8156 3.18304 15.7563C4.74744 13.6 4.69157 13.1781 5.39928 10.3562C5.78107 11.0875 6.76814 11.4812 7.55034 11.4812C10.8468 11.4812 12.3274 8.24688 12.3274 5.33125C12.3274 2.22813 9.66415 0.203125 6.7402 0.203125Z" fill="black"/>
                            </svg>
                        </div>
                    </a>
                    <a className="footer__icon__link" href="#">
                        <div className="footer__rectangle__socials">
                            <svg className="footer__rectangle" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.4506 0H0V32H31.4506V0Z" fill="white"/>
                            </svg>                                
                        </div>
                        <div className="footer__icons">
                            <svg className="footer__twitter" width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4181 3.74107C14.4281 3.88319 14.4281 4.02535 14.4281 4.16747C14.4281 8.50247 11.1509 13.4974 5.16096 13.4974C3.31558 13.4974 1.60132 12.9593 0.159302 12.0253C0.421495 12.0558 0.673569 12.0659 0.94585 12.0659C2.46851 12.0659 3.8702 11.5482 4.98953 10.6649C3.5576 10.6345 2.3576 9.69032 1.94415 8.39081C2.14585 8.42125 2.34751 8.44156 2.5593 8.44156C2.85172 8.44156 3.14418 8.40094 3.41643 8.32991C1.92401 8.02531 0.80465 6.70553 0.80465 5.11163V5.07103C1.23825 5.31469 1.74249 5.46697 2.2769 5.48725C1.39959 4.89841 0.824826 3.89335 0.824826 2.75628C0.824826 2.14716 0.98614 1.58878 1.26851 1.10147C2.87187 3.09131 5.28195 4.39078 7.98443 4.53294C7.93403 4.28928 7.90376 4.0355 7.90376 3.78169C7.90376 1.97457 9.35586 0.502502 11.1609 0.502502C12.0987 0.502502 12.9457 0.89844 13.5407 1.53803C14.2768 1.39591 14.9827 1.12178 15.6079 0.746159C15.3659 1.5076 14.8516 2.14719 14.176 2.55325C14.8315 2.48222 15.4668 2.29944 16.0516 2.04566C15.608 2.69538 15.0533 3.27403 14.4181 3.74107Z" fill="black"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </>
  );
};

export default Footer;
