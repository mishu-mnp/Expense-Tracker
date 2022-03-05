import './App.css';
import SpendCard from './components/SpendCard';

function App() {
  return (
    <div className="App">
      <div className="cards-container">
        <SpendCard title='Income' />
        <SpendCard title='Expense' />
      </div>
    </div>
  );
}

export default App;
