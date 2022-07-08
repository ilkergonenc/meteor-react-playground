// import { Meteor } from 'meteor/meteor';
// import { useTracker } from 'meteor/react-meteor-data';

import React from "react";
import { Outlet } from "react-router-dom";

import { useLayout } from "../../providers/LayoutProvider";

export function DashboardLayout() {
  const layout = useLayout();

  if (layout) {
    layout.setLayout({
      ...layout.settings,
      layout: "dashboard-body",
      page: {
        ...layout.settings.page,
        layout: "dashboard-page container mx-auto grid grid-cols-6 gap-6",
        aside: true,
        main: "col-span-4",
      },
    });
  }

  return <Outlet />;
}
