import './App.css';
import { Balance } from './components/balance/Balance';
import Header from './components/header/Header';
import { IncomeExpenses } from './components/income-expenses/IncomeExpenses';
import { AddTransaction } from './components/transactionlist/AddTransaction';
import { TransactionList } from './components/transactionlist/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
