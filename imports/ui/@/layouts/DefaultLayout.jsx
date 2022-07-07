import React from "react";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="app bg-slate-400">
      <nav className="mx-auto w-fit">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/welcome">Welcome</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/not-found">NotFound</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
