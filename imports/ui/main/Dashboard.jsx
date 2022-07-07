import { Meteor } from "meteor/meteor";
import React from "react";

const appName = Meteor.settings.name;

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl mb-4">Welcome to Dashboard, {appName}!</h1>
      <a href="/" className="btn">
        Home
      </a>
    </div>
  );
}
