import React, { useState, useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';
import IosCheckmarkCircleOutline from 'react-ionicons/lib/IosCheckmarkCircleOutline'

/**
 * Fields used to create new transaction
 */
const NewTransactionForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('inc'); // default is income
  const { addTransaction } = useContext(TransactionContext);

  /**
   * Calls addTransaction and passes current states of each attribute as arguments to create new transaction
   * @param {object} e - event object 
   */
  const onSubmit = e => {
    e.preventDefault();

    addTransaction(type, description, amount);

    // Reset fields
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