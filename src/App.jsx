import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import NoExpenseSelected from './components/NoExpenseSelected';
import Input from './components/Input';
import { Value } from './components/Context';
import { useState } from 'react';
import DisplayExpense from './components/DisplayExpense';
import Modal from './components/Modal';

function App() {
  const [save, setSave] = useState([]);
  const [saveObj,setSaveObj] = useState([])


  const xValue = {
    expenseData: save,
  };
  console.log(saveObj)
  const isTrue=(saveObj.amount==='')
  return (
    <Value.Provider value={xValue}>
      <Header />
      <Categories />
      <Input sendData={(data) => setSave(data)} newObject={(obj)=>setSaveObj(obj)}/>
      <DisplayExpense />
    </Value.Provider>
    
  );
}

export default App;
