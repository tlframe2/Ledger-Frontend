import React, { useState, useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';
import IosCheckmarkCircleOutline from 'react-ionicons/lib/IosCheckmarkCircleOutline'

const NewTransactionForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('inc');
  const { addTransaction } = useContext(TransactionContext);

  const onSubmit = e => {
    e.preventDefault();

    addTransaction(type, description, amount);

    setDescription('');
    setAmount('');
  }

  return (
    <div className="add">
      <div className="add__container">
        <form onSubmit={onSubmit}>
          <select className="add__type" value={type} onChange={e => setType(e.target.value)}>
            <option value="inc" selected>+</option>
            <option value="exp">-</option>
          </select>
          <input type="text" className="add__description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Transaction Description" />
          <input type="number" step="0.01"  className="add__value" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
          <button className="add__btn">
            <IosCheckmarkCircleOutline fontSize="35px" color="#42C08B" />
          </button>
        </form>
      </div>
      
    </div>
    
  );
}

export default NewTransactionForm;