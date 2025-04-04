import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="page-container">
            <h2>Главная страница</h2>
            <p>Добро пожаловать на главную страницу нашего приложения.</p>
            <Link to='/about' className="nav-link">О нас</Link>
        </div>
    )
}

export default HomePage;