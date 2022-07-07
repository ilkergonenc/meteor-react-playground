import React, { useState } from "react";

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container mx-auto text-center py-8">
      <h1 className="text-3xl">Welcome to Meteor!</h1>
      <button onClick={increment} className="px-4 py-2 border rounded">
        Click Me
      </button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
