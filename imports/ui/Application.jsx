import React from "react";
import { Routes, Route } from "react-router-dom";
import { Loadable } from "meteor/npdev:react-loadable";

const Loading = () => <p>Loading ...</p>;

const Hello = Loadable({
  loader: () => import("./Hello"),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import("./NotFound"),
  loading: Loading,
});

export default Application = () => (
  <div className="app">
    <Routes>
      <Route index element={<Hello />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);
