import { ErrorPanel, PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
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
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
