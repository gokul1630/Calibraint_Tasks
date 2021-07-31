import React, { useContext } from 'react';
import { CounterContext } from '../App';
function ComponentB() {
  const context = useContext(CounterContext);
  return (
    <>
      <br />
      <button
        onClick={() =>
          context.dispatch({ type: 'increment_by_10', value: 10 })
        }>
        increment 10
      </button>
      <button
        onClick={() => context.dispatch({ type: 'decrement_by_5', value: 5 })}>
        decrement 5
      </button>
          SecondCount {context.count.secondCounter}
      <br />
      <button onClick={()=>context.dispatch({ type: 'reset' })}>
        Reset Values
      </button>
    </>
  );
}

export default ComponentB;
