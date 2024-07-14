// useEffect is another essential hook in React that allows you to perform side effects in functional components.

// The first parameter is a function that contains the code you want to run for the side effect.
// The second parameter is an optional array of dependencies (often referred to as the dependency array).

// If you omit the second parameter (dependencies), the useEffect runs after every render.

// If you provide an empty array ([]) as the second parameter, the useEffect runs only once after
//  the initial render (like componentDidMount in class components).

// If you include dependencies ([dependencies]), the useEffect runs after the initial render 
// and whenever any of the dependencies change.

import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data using userId
    const fetchUser = async () => {
      const response = await fetch(`https://api.example.com/users/${userId}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      {/* Additional user details */}
    </div>
  );
};

export default UserProfile;

// How it Works:

// When the component mounts (or when userId changes), useEffect fetches user data from an API.
// It updates the user state with the fetched data, triggering a re-render to display the user's details.

// The cleanup function returned by useEffect (if specified) runs before the component unmounts
//  or before running the effect again.

// Common Interview Questions:

// Why use useEffect instead of placing code directly in the component body?

// useEffect separates concerns by keeping side effects
//  (like data fetching, subscriptions, or manually changing the DOM) separate from the component rendering logic.
// How do you handle cleanup in useEffect?

// You can return a cleanup function inside useEffect to clean up any resources
//  (like subscriptions or timers) before the component unmounts or before running the effect again.
// What happens if you omit the dependency array ([]) in useEffect?

// The effect runs after every render, potentially causing unnecessary re-execution. 
// It's useful when the effect doesn't depend on any values from props or state.
// Understanding useEffect is crucial for managing side effects in React applications effectively,
//  ensuring components remain efficient and responsive.







