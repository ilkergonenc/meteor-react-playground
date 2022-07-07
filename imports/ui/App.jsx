import React from "react";
import { Hello } from "./Hello.jsx";
import { Info } from "./Info.jsx";

export const App = () => (
  <div className="container mx-auto">
    <h1 className="text-3xl">Welcome to Meteor!</h1>
    <Hello />
    {/* <Info/> */}
  </div>
);
