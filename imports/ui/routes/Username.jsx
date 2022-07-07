import { Meteor } from "meteor/meteor";
import React from "react";
import { useParams } from "react-router-dom";

import { useAuth } from "../providers/AuthProvider";
// const appName = Meteor.settings.name;

export default function Username({ params }) {
  const auth = useAuth();
  const { username } = useParams();

  if (username !== auth.user) {
    return null;
  }

  return (
    <div>
      <h1 className="text-3xl mb-4">Hi @{username}!</h1>
    </div>
  );
}
