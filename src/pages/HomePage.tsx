import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Link to="/svg">
        <p>SVG</p>
      </Link>
    </div>
  );
}
