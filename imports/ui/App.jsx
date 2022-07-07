import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Hello } from "./Hello";
import { NotFound } from "./NotFound";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Hello />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
