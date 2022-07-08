import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Tracker } from "meteor/tracker";

import React, { useContext, createContext, useState, useEffect } from "react";
import { useHost } from "./HostProvider";
import Navbar from "../components/Navbar";

function LayoutTemplate({ settings, children }) {
  const host = useHost();

  return (
    <section className={settings.layout ? settings.layout : ""}>
      {settings.header && (
        <header>
          <Navbar />
        </header>
      )}
      {settings.aside && <aside></aside>}
      <main
        className={
          typeof settings.main === "string" ? settings.main : "h-[88vh]"
        }
      >
        {children}
      </main>
      {settings.footer && (
        <footer className="text-center py-8 bg-slate-200">
          <p>{host}</p>
        </footer>
      )}
    </section>
  );
}

function BodyLayout({ settings, children }) {
  return <LayoutTemplate settings={settings}>{children}</LayoutTemplate>;
}

function PageLayout({ settings, children }) {
  return <LayoutTemplate settings={settings}>{children}</LayoutTemplate>;
}

const layoutDefaultSettings = {
  layout: "app-body",
  header: true,
  aside: false,
  main: true,
  footer: true,
  page: {
    layout: "app-page",
    header: false,
    aside: false,
    main: false,
    footer: false,
  },
};

const LayoutContext = createContext(null);

export function LayoutProvider({ children }) {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Tracker.autorun(() => {
      setSettings({ ...layoutDefaultSettings });
      setLoading(false);
    });
  }, []);

  const setLayout = (customSettings) => {
    useEffect(() => {
      setSettings({ ...customSettings });
    }, []);
  };

  if (loading) {
    return <span className="sr-only">Loading Layout</span>;
  } else {
    return (
      <LayoutContext.Provider value={{ settings, setLayout }}>
        <BodyLayout settings={{ ...settings }}>
          <PageLayout settings={{ ...settings.page }}>{children}</PageLayout>
        </BodyLayout>
      </LayoutContext.Provider>
    );
  }
}

export function useLayout() {
  return useContext(LayoutContext);
}
