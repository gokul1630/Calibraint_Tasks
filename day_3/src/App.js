import { createContext, useReducer } from 'react';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import { initialState, reducer } from './reducer/CounterReducer';

export const CounterContext = createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <CounterContext.Provider value={{ count, dispatch }}>
        <ComponentA />
        <ComponentB />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
