import { Meteor } from "meteor/meteor";

import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "/imports/ui/App";

Meteor.startup(() => {
  render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("react-target")
  );
});
