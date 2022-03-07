import './App.css';
import MainExpense from './components/MainExpense';
import SpendCard from './components/SpendCard';

function App() {
  return (
    <div className="App">
      <div className="cards-container">
        <SpendCard title='income' />
        <MainExpense />
        <SpendCard title='expense' />
      </div>
    </div>
  );
}

export default App;
