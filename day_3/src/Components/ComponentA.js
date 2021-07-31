import React, { useContext } from 'react';
import { CounterContext } from '../App';
function ComponentA() {
  const context = useContext(CounterContext);
  return (
    <>
      <button onClick={() => context.dispatch({ type: 'increment', value: 1 })}>
        increment
      </button>
      <button onClick={() => context.dispatch({ type: 'decrement', value: 1 })}>
        decrement
      </button>
      Count {context.count.counter}
    </>
  );
}

export default ComponentA;
