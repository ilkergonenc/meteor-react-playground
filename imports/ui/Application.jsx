import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Loadable } from "meteor/npdev:react-loadable";

const Loading = () => <p>Loading ...</p>;

const DefaultLayout = Loadable({
  loader: () => import("./@/layouts/DefaultLayout"),
  loading: Loading,
});
const Welcome = Loadable({
  loader: () => import("./main/Welcome"),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import("./auth/Login"),
  loading: Loading,
});
const Homepage = Loadable({
  loader: () => import("./main/Homepage"),
  loading: Loading,
});
const Dashboard = Loadable({
  loader: () => import("./main/Dashboard"),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import("./main/NotFound"),
  loading: Loading,
});

export default function Application() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Homepage />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
