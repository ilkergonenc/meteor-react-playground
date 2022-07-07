import React from "react";

export default function Homepage() {
  return (
    <div>
      <h1 className="text-3xl mb-4">Welcome to Meteor!</h1>
      <a href="/not-found" className="btn">
        Go no where!
      </a>
      <a href="/dashboard" className="btn">
        Dashboard
      </a>
    </div>
  );
}
