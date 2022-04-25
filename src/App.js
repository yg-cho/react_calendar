import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 'e1',
      title :'Car Insurance',
      amount: 294.67,
      date: new Date(2022,4,15)
    },
    {
      id: 'e2',
      title :'Car2 Insurance',
      amount: 394.67,
      date: new Date(2022,4,15)
    },
    {
      id: 'e3',
      title :'Car3 Insurance',
      amount: 494.67,
      date: new Date(2022,4,15)
    },
  ]

  const addExpenseHandler = expense => {
    console.log('In app js');
    console.log(expense);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
