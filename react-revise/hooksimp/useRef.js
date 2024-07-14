// The useRef hook in React is primarily used to persist values across renders without causing re-renders
//  when the value changes. It's also commonly used to access or store references to DOM elements or React components.
//  Here’s how useRef works and some important interview questions related to its usage:

import React, { useRef } from 'react';

const InputComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default InputComponent;


// Important Interview Questions about useRef:
// What is the difference between useRef and useState?

// useRef is primarily used for accessing or storing mutable values that persist across renders, such as DOM elements or instance variables. Updating useRef does not trigger re-renders. useState is used for managing component state that triggers re-renders when updated.
// When would you use useRef instead of useState?

// Use useRef when you need to store mutable values that do not trigger re-renders or when you need to access DOM elements imperatively (e.g., focusing an input).
// How can you access a DOM element with useRef?

// You can use useRef with the ref attribute on a JSX element (<input ref={inputRef} />) to store a reference to the DOM element. This allows you to interact with the DOM imperatively, such as focusing an input or measuring its dimensions.
// Can you store other values besides DOM elements with useRef?

// Yes, useRef can store any mutable value. Besides DOM elements, you can use useRef to store previous values, create instance variables, or maintain any value that you want to persist across renders without causing re-renders.
// How does useRef help in optimizing performance in React?

// useRef is useful for optimizing performance by avoiding unnecessary re-renders when you need to access or store values that do not affect the component's rendering. It's particularly useful in cases where interacting with the DOM or maintaining values between renders is required.
// Understanding useRef is essential for effectively managing references and optimizing performance in React applications, especially when dealing with imperative interactions with the DOM or storing values that should persist across renders without causing re-renders.

