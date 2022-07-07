import React from "react";
import { Routes, Route } from "react-router-dom";

import { Hello } from "./Hello";
import { NotFound } from "./NotFound";

export const App = () => (
  <div className="app">
    <Routes>
      <Route index element={<Hello />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);
