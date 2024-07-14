// useContext is a React hook that provides a way to pass data through the component tree without
//  having to pass props down manually at every level. 

// It's particularly useful for passing down global data that can be accessed by many components
//  at different nesting levels without explicitly passing it through each component.

// Create a context
const ThemeContext = React.createContext('light');
// defaultValue (optional): This is only used when a component does not find a matching Provider above it in the tree.
//  It's useful for providing a fallback value.

// Context provider component
const App = () => {
  return (
      <ThemeContext.Provider value="dark">
        {/* To provide a context value to components, you use a Provider component: */}
      <Toolbar />
    </ThemeContext.Provider>
  );
};

// Context consumer component
const Toolbar = () => {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
//   In this example, Toolbar consumes the ThemeContext using useContext. 
// It receives the current theme value ("dark") from the nearest ThemeContext.Provider ancestor (App).
};


// What problem does useContext solve?

// useContext eliminates the need to pass props through intermediate components to pass data down the component tree, 
// making the code cleaner and more maintainable, especially for global state management.


// When should you use useContext instead of props?

// useContext is ideal for passing down global data (like themes, authenticated user info, language preference) 
// that many components need access to. It simplifies the prop-drilling problem.


// How does useContext differ from useState and useReducer?

// useState and useReducer manage local component state, while useContext allows components
//  to consume context values provided by Context.Provider higher in the component tree.


// Can you have multiple contexts in a single application?

// Yes, you can create and use multiple contexts in a single React application.
//  Each context and its providers and consumers operate independently.
// Understanding useContext is crucial for effectively managing state and passing down data in React applications,
//  especially when dealing with complex component hierarchies or global state management scenarios.