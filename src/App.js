import './App.css';
import MainExpense from './components/MainExpense';
import SpendCard from './components/SpendCard';

function App() {
  return (
    <div className="App">
      <div className="cards-container">
        <SpendCard title='Income' />
        <MainExpense />
        <SpendCard title='Expense' />
      </div>
    </div>
  );
}

export default App;
