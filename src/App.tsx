import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SvgDemoPage from "./pages/SvgDemoPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/svg" element={<SvgDemoPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
