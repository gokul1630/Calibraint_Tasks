export const initialState = {
  counter: 0,
  secondCounter: 0,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + action.value };
    case 'decrement':
      return { ...state, counter: state.counter - action.value };
    case 'increment_by_10':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decrement_by_5':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
