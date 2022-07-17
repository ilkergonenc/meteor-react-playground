import React from "react";
import { Routes, Route } from "react-router-dom";
import { Loadable } from "meteor/npdev:react-loadable";

import { fetchHostIdFromAddress } from "../api/hosts/hosts.validMethods";

const Loading = () => <p>Loading ...</p>;

const Hello = Loadable({
  loader: () => import("./Hello"),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import("./NotFound"),
  loading: Loading,
});

fetchHostIdFromAddress.call({ address: location.host }, (error, respond) => {
  if (error) {
    console.error(error);
  }
  console.log(respond);
});

export default Application = () => (
  <div className="app">
    <Routes>
      <Route index element={<Hello />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);
