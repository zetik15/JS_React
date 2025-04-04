import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="page-container">
            <h2>Страница не найдена (404)</h2>
            <p>Извините, запрашиваемая страница не существует.</p>
            <Link to="/" className="nav-link">Вернуться на главную</Link>
        </div>
    );
}

export default NotFoundPage;