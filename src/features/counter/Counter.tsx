import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  selectCount,
} from './counterSlice';

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(increment())}
      >+</button>
      <span>{ count }</span>
      <button
        onClick={() => dispatch(decrement())}
      >-</button>
    </div>
  );
}

export default Counter;
