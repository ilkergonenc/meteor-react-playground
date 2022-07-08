import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Tracker } from "meteor/tracker";

import React, { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Tracker.autorun(() => {
      if (Accounts.loginServicesConfigured()) {
        setUser(Meteor.user()?.username);
        setLoading(false);
      }
    });
  });

  const signin = (newUser, callback) => {
    return Meteor.loginWithPassword(newUser.username, newUser.password, () => {
      setUser(newUser.username);
      callback();
    });
  };

  const signout = (callback) => {
    return Meteor.logout(() => {
      setUser(null);
      callback();
    });
  };

  if (loading) {
    return <span className="sr-only">loading user ...</span>;
  } else {
    return (
      <AuthContext.Provider value={{ user, signin, signout }}>
        {children}
      </AuthContext.Provider>
    );
  }
}

export function useAuth() {
  return useContext(AuthContext);
}
