import { Meteor } from "meteor/meteor";

import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Application from "/imports/ui/Application";

Meteor.startup(() => {
  render(
    <React.StrictMode>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("react-target")
  );
});
