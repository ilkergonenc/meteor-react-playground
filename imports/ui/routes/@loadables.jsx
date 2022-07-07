import { Loadable } from "meteor/npdev:react-loadable";

import React from "react";

const loading = () => <p className="sr-only">Loading ...</p>;

export const Login = Loadable({
  loader: () => import("./Login"),
  loading,
});

export const Username = Loadable({
  loader: () => import("./Username"),
  loading,
});

export const Homepage = Loadable({
  loader: () => import("./Homepage"),
  loading,
});

export const Dashboard = Loadable({
  loader: () => import("./Dashboard"),
  loading,
});

export const NotFound = Loadable({
  loader: () => import("./NotFound"),
  loading,
});
