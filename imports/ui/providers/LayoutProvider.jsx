import React, { useContext, createContext } from "react";
import { useHost } from "./HostProvider";
import Navbar from "../components/Navbar";

const LayoutContext = createContext(null);

function LayoutTemplate({ children }) {
  const host = useHost();

  return (
    <section className="app">
      <header>
        <Navbar />
      </header>
      <main className="min-h-[88vh]">{children}</main>
      <footer className="text-center py-8 bg-slate-200">
        <p>{host}</p>
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
