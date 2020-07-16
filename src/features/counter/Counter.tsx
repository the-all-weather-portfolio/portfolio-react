import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('5');

  return (
    <div>
      <div className="d-flex">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >+</button>
        <h1>{ count }</h1>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(decrement())}
        >-</button>
      </div>
      <div>
        <input type="text"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >Add Amount</button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >Add Async</button>
      </div>
    </div>
  );
}

export default Counter;
