// The useState hook is a fundamental part of React's state management system.
// It allows functional components to manage state without needing to use class components.
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;


// How it Works:

// When useState is called, it initializes count to 0 (in this example).
// setCount is a function that updates the count state.
// When setCount is called with a new value (count + 1 or count - 1),// 
//React schedules a re-render of the component with the updated state.


// Important Notes:

// The argument passed to useState is the initial state value. It's only used during the first render.
// You can use useState multiple times in a single component to manage different pieces of state independently.
// useState simplifies state management in functional components
// by providing a straightforward way to declare and update state variables.