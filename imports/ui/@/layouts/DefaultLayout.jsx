import React from "react";
import { Outlet } from "react-router-dom";

import { useAuth } from "../../auth/@/AuthProvider";

export default function DefaultLayout() {
  const auth = useAuth();

  return (
    <div className="app">
      <nav className="mx-auto w-fit py-8">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          {/* <li>
            <a href="/welcome">Welcome</a>
          </li> */}
          {!auth.user && (
            <li>
              <a href="/login">Login</a>
            </li>
          )}
          {/* <li>
            <a href="/not-found">NotFound</a>
          </li> */}
          {auth.user && (
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          )}
          {auth.user && (
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  auth.signout(() => nav("/login"));
                }}
              >
                Sign out
              </a>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
