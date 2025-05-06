import './Perks.css';
import icon6 from '../../assets/images/icons/icon_6.svg';
import icon7 from '../../assets/images/icons/icon_7.svg';
import icon8 from '../../assets/images/icons/icon_8.svg';

const Perks = () => {
    return (
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
    )
}

export default Perks;