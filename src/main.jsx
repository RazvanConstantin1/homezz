import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <h1 className="text-red-500 text-4xl">HELLO</h1>
    </div>
  </StrictMode>
);
