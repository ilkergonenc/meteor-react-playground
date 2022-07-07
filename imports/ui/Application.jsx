import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Loadable } from "meteor/npdev:react-loadable";

import { HostProvider } from "./providers/HostProvider";
import { AuthProvider } from "./providers/AuthProvider";
import { LayoutProvider } from "./providers/LayoutProvider";

import { AuthMiddleware } from "./middlewares/AuthMiddleware";

// import Homepage from "./routes/Homepage";
// import Login from "./routes/Login";
// import Username from "./routes/Username";
// import Dashboard from "./routes/Dashboard";
// import NotFound from "./routes/NotFound";

const Loading = () => <p>Loading ...</p>;
const Login = Loadable({
  loader: () => import("./routes/Login"),
  loading: Loading,
});
const Username = Loadable({
  loader: () => import("./routes/Username"),
  loading: Loading,
});
const Homepage = Loadable({
  loader: () => import("./routes/Homepage"),
  loading: Loading,
});
const Dashboard = Loadable({
  loader: () => import("./routes/Dashboard"),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import("./routes/NotFound"),
  loading: Loading,
});

export default function Application() {
  return (
    <HostProvider>
      <AuthProvider>
        <LayoutProvider>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path="/*" element={<AuthMiddleware />}>
              <Route path="@:username" element={<Username />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LayoutProvider>
      </AuthProvider>
    </HostProvider>
  );
}
