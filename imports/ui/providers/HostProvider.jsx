// import { Meteor } from "meteor/meteor";
// import { Accounts } from "meteor/accounts-base";
// import { Tracker } from "meteor/tracker";

import React, { useContext, createContext } from "react";

const HostContext = createContext(null);

export function HostProvider({ children }) {
  const host = location.host;
  return <HostContext.Provider value={host}>{children}</HostContext.Provider>;
}

export function useHost() {
  return useContext(HostContext);
}
