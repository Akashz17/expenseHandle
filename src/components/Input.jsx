import { useRef, useState } from "react";
import Modal from "./Modal";

export default function Input({ sendData,newObject}) {
  const dialog = useRef();
  const [selectedOption, setSelectedOption] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [storeData, setStoredata] = useState([]);

  function handleExpense(e) {
    setExpenseName(e.target.value);
  }

  function handleAmount(e) {
    setAmount(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const newData = {
    id: storeData.length + 1, // Adding unique ID
    category: selectedOption,
    expense: expenseName,
    amount: amount,
    date: date
  };

  function saveData() {
    const updatedData = [...storeData, newData];
    setStoredata(updatedData);
    sendData(updatedData); // Send the updated data to the parent
    setExpenseName('');
    setAmount('');
    setDate('');
    setSelectedOption('');
    newObject(newData);

    
  }
   const isTrue = (expenseName === '')
   
  
  return (
    <>
    <div className="mt-8">
      <div className="flex justify-center">
        <div className="flex items-center w-3/6 px-4">
          <h1 className="flex-none text-2xl font-medium">{selectedOption}</h1>
          <div className="flex flex-grow justify-end gap-7">
            <button className="px-4 py-2 bg-purple-400 text-white rounded-md" onClick={saveData}>Save</button>
            <button className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex justify-center">
          <label htmlFor="" className="text-xl">Select a Category:</label>
          <select value={selectedOption} onChange={handleSelectionChange}>
            <option value="" className="text-xl">-- Please choose an option --</option>
            <option className="text-xl">Food</option>
            <option className="text-xl">Shopping</option>
            <option className="text-xl">Finance</option>
            <option className="text-xl">Utilities</option>
          </select>
        </div>
        <div className="flex justify-center mt-2">
          <label htmlFor="" className="text-xl">Expense: </label>
          <input type="text" placeholder="Enter Expense Name" onChange={handleExpense} value={expenseName} />
        </div>
        <div className="flex justify-center mt-2">
          <label htmlFor="" className="text-xl">Amount: </label>
          <input type="text" placeholder="Enter expense amount" onChange={handleAmount} value={amount} />
        </div>
        <div className="flex justify-center mt-2">
          <label htmlFor="" className="text-xl">Date: </label>
          <input type="date" onChange={handleDate} value={date} />
        </div>
      </div>
    </div>
    {isTrue &&<Modal ref={dialog}/>}
    </>
  );
}