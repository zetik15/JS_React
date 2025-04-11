import './App.css';
import { store } from './store/store';
import { ProductList } from './components/ProductList';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <div className="products-container">
          <h1 className="section-title">Каталог товаров</h1>
          <ProductList />
        </div>
      </div>
    </Provider>
  )
}

export default App;