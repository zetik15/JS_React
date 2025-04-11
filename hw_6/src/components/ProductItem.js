import './ProductItem.css';

export const ProductItem = ({ product, onDelete, onEdit, onToggle}) => {
    return (
        <div className="product-item">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            
            <div className="product-details">
                <span className="product-price">Цена: {product.price} ₽</span>
                <span className="product-category" style={{textAlign: 'center'}}>{product.category}</span>
            </div>
            
            <span className={`product-status ${product.available ? 'status-available' : 'status-unavailable'}`}>
                {product.available ? 'Доступен' : 'Недоступен'}
            </span>

            <div className="product-actions">
                <button 
                    className="toggle-btn"
                    onClick={() => onToggle(product.id)}>
                    {product.available ? 'Сделать недоступным' : 'Сделать доступным'}
                </button>
                <button 
                    className="edit-btn"
                    onClick={() => onEdit(product.id)}>
                    Редактировать
                </button>
                <button 
                    className="delete-btn"
                    onClick={() => onDelete(product.id)}>
                    Удалить
                </button>
            </div>
        </div>
    )
}