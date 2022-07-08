import React from "react";
import { Routes, Route } from "react-router-dom";

import { HostProvider } from "./providers/HostProvider";
import { AuthProvider } from "./providers/AuthProvider";
import { LayoutProvider } from "./providers/LayoutProvider";

import { AuthMiddleware } from "./middlewares/AuthMiddleware";
import { DashboardLayout } from "./middlewares/LayoutMiddlewares/DashboardLayout";

import {
  Homepage,
  Login,
  Username,
  Dashboard,
  NotFound,
} from "./routes/@loadables";

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

              <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </LayoutProvider>
      </AuthProvider>
    </HostProvider>
  );
}
