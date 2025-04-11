import { useState } from 'react';
import './ProductForm.css';

export const ProductForm = ({ product, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        name: product ? product.name : '',
        description: product ? product.description : '',
        price: product ? product.price : '',
        category: product ? product.category : ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const submitData = product ? { ...formData, id: product.id, available: product.available } : formData;

        onSubmit(submitData);
    }

    return (
        <div className="modal-overlay" onClick={onCancel}>
            <div className="product-form-container" onClick={(e) => e.stopPropagation()}>
                <div className="product-form-header">
                    <h2 className="product-form-title">
                        {product ? 'Редактировать товар' : 'Добавить новый товар'}
                    </h2>
                    <button className="close-button" onClick={onCancel}>×</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Название:</label>
                        <input 
                            className="form-input"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Описание:</label>
                        <textarea 
                            className="form-input form-textarea"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Цена:</label>
                        <input 
                            className="form-input"
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Категория:</label>
                        <input 
                            className="form-input"
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-actions">
                        {onCancel && (
                            <button 
                                type="button" 
                                className="cancel-button"
                                onClick={onCancel}>
                                Отмена
                            </button>
                        )}
                        <button 
                            type="submit"
                            className="submit-button">
                            {product ? 'Сохранить изменения' : 'Добавить товар'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}