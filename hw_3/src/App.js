import logo from './logo.svg';
import './App.css';
import TemperatueConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemperatueConverter />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
