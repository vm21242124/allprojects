// The useReducer hook in React is used for managing complex state logic within functional components.
//  It's an alternative to useState that is more suitable when state transitions follow predictable patterns
//  or when the next state depends on the previous one. 

// const [state, dispatch] = useReducer(reducer, initialState);

// state: Represents the current state value, similar to useState.
// dispatch: Function used to dispatch actions to update the state.
// reducer: A function that specifies how the state should change in response to actions.
// initialState: The initial state value for the component.

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
};



// Benefits of useReducer:

// Centralized Logic: Helps in managing complex state logic more effectively.
// Predictable State Transitions: State transitions are explicit and predictable, making debugging easier.
// Suitable for Global State: Useful for managing global state when combined with context API.
// Important Interview Questions about useReducer:


// What is the difference between useState and useReducer?

// useState is simpler and used for managing local component state,
//  while useReducer is more powerful and suitable for managing complex state logic that involves 
// multiple sub-values or when the next state depends on the previous one.


// When should you use useReducer instead of useState?

// useReducer is preferred when state transitions are more complex and involve multiple sub-values,
//  or when the state logic is interconnected and requires central management.

// What is a reducer function in useReducer?

// A reducer function is a pure function that takes the current state and an action,
//  and returns a new state based on that action. It specifies how the state should change in response
//  to different actions dispatched using dispatch.

// Can you combine useReducer with useContext?
// Yes, combining useReducer with useContext allows for managing global state across 
// components more efficiently.
//  useReducer manages state transitions, while useContext provides the global context.

// How do you handle asynchronous actions with useReducer?

// useReducer is synchronous, so for asynchronous actions (like data fetching),
//  you typically dispatch actions to start and complete the asynchronous operation
//  (e.g., using fetch or axios), updating the state in response to these actions.
// Understanding useReducer is essential for managing state in more complex React applications,
//  providing a structured approach to state management and enabling better separation of concerns in component logic.
