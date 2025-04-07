import { Provider, useSelector } from 'react-redux';
import store from './components/store';
import ChangeTheme from './components/ChangeTheme';
import './App.css';

const AppContent = () => {
  const theme = useSelector(state => state.theme);
  
  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <h1>Приложение с переключением темы</h1>
      <ChangeTheme />
    </div>
  )
}

function App() {
  return (
    <div className='app-container'>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </div>
  )
}

export default App;
