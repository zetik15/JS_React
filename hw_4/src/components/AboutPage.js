import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="page-container">
            <h2>О нас</h2>
            <p>Здесь вы можете узнать больше о нашей компании.</p>
            <Link to='/' className="nav-link">Главная страница</Link>
        </div>
    )
}

export default AboutPage;