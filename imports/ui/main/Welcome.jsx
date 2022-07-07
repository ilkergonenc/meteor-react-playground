import React, { useState } from "react";

export default function Welcome() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Welcome to Meteor!</h1>
      <button onClick={increment} className="btn">
        Click Me
      </button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
}
