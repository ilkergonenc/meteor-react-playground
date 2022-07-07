import { Meteor } from "meteor/meteor";
import React from "react";

import { useAuth } from "../auth/@/AuthProvider";

export default function Homepage() {
  const auth = useAuth();

  return (
    <div>
      <h1 className="text-3xl mb-4">
        Welcome to Homepage, {auth.user ? auth.user : "Jane Doe"} !
      </h1>
      <a href="/not-found" className="btn">
        Go no where!
      </a>
      <a href="/dashboard" className="btn">
        Dashboard
      </a>
    </div>
  );
}
