import React, { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./AuthProvider";
import { useHost } from "./HostProvider";

const LayoutContext = createContext(null);

function LayoutTemplate({ children }) {
  const auth = useAuth();
  const host = useHost();
  const nav = useNavigate();

  return (
    <section className="app">
      <header>
        <nav className="mx-auto w-fit py-8">
          <ul className="flex space-x-4">
            <li>
              <a href="/">Home</a>
            </li>
            {!auth.user && (
              <li>
                <a href="/login">Login</a>
              </li>
            )}
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
                    auth.signout(() => nav("/", { replace: true }));
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

export function LayoutProvider({ children }) {
  return (
    <LayoutContext.Provider value={{ layout: true }}>
      <LayoutTemplate>{children}</LayoutTemplate>
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  return useContext(LayoutContext);
}
