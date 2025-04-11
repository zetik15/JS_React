import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, toggleAvailability, updateProduct } from '../reducers/productReducer';
import { ProductItem } from './ProductItem';
import { useState } from 'react';
import { ProductForm } from './ProductForm';
import './ProductList.css';

export const ProductList = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const handleOpenAddForm = () => {
        setIsFormOpen(true);
    }
    
    const handleOpenEditForm = (id) => {
        const product = products.find(product => product.id === id);
        if (product) {
            setEditingProduct(product);
            setIsFormOpen(true);
        }
    }

    const handleCloseForm = () => {
        setIsFormOpen(false);
        setEditingProduct(null);
    }

    const handleFormSubmit = (data) => {
        if (editingProduct !== null) {
            dispatch(updateProduct(data));
        } else {
            dispatch(addProduct(data));
        }

        handleCloseForm();
    }

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
    }

    const handleToggleAvailability = (id) => {
        dispatch(toggleAvailability(id))
    }

    return (
        <div className="product-list">
            <div className="product-list-header">
                <h2 className="product-list-title">Список товаров</h2>
                <button 
                    className="add-product-btn"
                    onClick={handleOpenAddForm}>
                    Добавить товар
                </button>
            </div>

            {isFormOpen && (
                <ProductForm
                    product={editingProduct}
                    onSubmit={handleFormSubmit}
                    onCancel={handleCloseForm}
                />
            )}

            {products.length === 0 ? (
                <div className="product-list-empty">
                    <p>Список товаров пуст</p>
                    <button onClick={handleOpenAddForm}>Добавить первый товар</button>
                </div>
            ) : (
                <div className="products-grid">
                    {products.map(product => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            onDelete={handleDeleteProduct}
                            onEdit={handleOpenEditForm}
                            onToggle={handleToggleAvailability}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}