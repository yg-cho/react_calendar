import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
import axios from "axios";
import useSWR from 'swr';

const DUMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });

  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
