// The useMemo hook in React is used for optimizing performance by memoizing the result of a function. 
// It's particularly useful when you need to compute a value that is expensive to compute and doesn't need to
//  be recomputed on every render.


// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// computeExpensiveValue: Function that computes the value you want to memoize.
// [a, b]: Dependency array. useMemo will only recompute the memoized value when any value in the dependency array changes.
// memoizedValue: Memoized value that is computed and returned by the function.

const MemoizedComponent = () => {
    const [count, setCount] = useState(0);
  
    // Compute factorial of count using useMemo
    const factorial = useMemo(() => {
      console.log('Computing factorial...');
      let result = 1;
      for (let i = 1; i <= count; i++) {
        result *= i;
      }
      return result;
    }, [count]);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Factorial of {count} is {factorial}</p>
      </div>
    );
  };

//   Important Interview Questions about useMemo:
// What is memoization, and why is it important in React?

// Memoization is the technique of caching the results of expensive function calls and
//  reusing them when the same inputs occur again. In React, useMemo is used to memoize values,
//  optimizing performance by avoiding unnecessary computations.
// When should you use useMemo?

// Use useMemo when you have a value that is expensive to compute and doesn't need to be recomputed
//  on every render, especially when rendering frequently or when the computation involves heavy 
// calculations or data processing.
// What's the difference between useMemo and useEffect?

// useMemo is used to memoize a value and recompute it only when dependencies change. It doesn't have side effects. useEffect is used for executing side effects (like data fetching, DOM manipulation) and runs after every render or when specific dependencies change.
// Can useMemo improve performance in every case?

// No, useMemo should be used judiciously. It's beneficial for optimizing computations, but overusing it for simple computations or when not necessary can lead to unnecessary complexity and potentially impact performance negatively.
// How does useMemo contribute to React's rendering optimization?

// useMemo helps in optimizing components by ensuring that expensive computations are only performed when necessary (i.e., when dependencies change), thereby reducing unnecessary renders and improving overall performance.
// Understanding when and how to use useMemo effectively is crucial for optimizing React applications, especially in scenarios where performance is critical or when dealing with computationally intensive tasks within functional components.

//   You can achieve similar results using useEffect, but there are key differences in when and how you should use useMemo versus useEffect for optimizing performance in React:

// useMemo vs useEffect

// Purpose:

// useMemo: Memoizes a computed value and re-computes only when dependencies change.
//  It's used for optimizing calculations or data transformations.
// useEffect: Executes side effects (like data fetching, DOM manipulation) 
// after every render or when specific dependencies change. 
// It's used for managing side effects that should not block rendering.

// Behavior:

// useMemo: Returns a memoized value. It does not have side effects and 
// is primarily used for optimizing performance by avoiding unnecessary recalculations.
// useEffect: Runs after every render and allows handling of side effects. 
// It can lead to unnecessary recalculations if used to compute values that 
// do not need to be recalculated on every render.
  