import React from "react";
import { useLayout } from "../providers/LayoutProvider";

export default function NotFound() {
  const layout = useLayout();

  if (layout) {
    layout.setLayout({
      ...layout.settings,
      layout: "cover-body",
      page: {
        ...layout.settings.page,
        layout: "cover-page h-full flex justify-center items-center",
        main: "",
      },
    });
  }
  return (
    <div>
      <p className="mb-6">Not Found</p>
      <a href="/" className="btn">
        Go Home
      </a>
    </div>
  );
}
