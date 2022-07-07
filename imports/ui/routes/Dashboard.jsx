import { Meteor } from "meteor/meteor";
import React from "react";

import { useAuth } from "../providers/AuthProvider";
// const appName = Meteor.settings.name;

export default function Dashboard() {
  const auth = useAuth();

  return (
    <div>
      <h1 className="text-3xl mb-4">
        Welcome to Dashboard, {auth.user && auth.user}!
      </h1>
      {/* <a href="/" className="btn">
        Home
      </a> */}
    </div>
  );
}
