// import { Meteor } from "meteor/meteor";
// import { Accounts } from "meteor/accounts-base";
// import { Tracker } from "meteor/tracker";

import React, { useState, useContext, createContext, useEffect } from "react";

const HostContext = createContext(null);

export const HostProvider = ({ children }) => {
  const host = location.host;
  return <HostContext.Provider value={host}>{children}</HostContext.Provider>;
};

export const useHost = () => {
  return useContext(HostContext);
};
