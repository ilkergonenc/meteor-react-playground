import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./AuthProvider";
import { useHost } from "./HostProvider";

export function LayoutProvider({ children }) {
  const auth = useAuth();
  const host = useHost();
  const navigate = useNavigate();

  return (
    <section className="app">
      <header>
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
                <a href={`/@${auth.user}`}>{`@${auth.user}`}</a>
              </li>
            )}
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
                    auth.signout(() => navigate("/", { replace: true }));
                  }}
                >
                  Sign out
                </a>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p className="py-16">{host}</p>
      </footer>
    </section>
  );
}
