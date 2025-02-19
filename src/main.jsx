import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ContactApp from "./components/ContactApp";

// styling
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <ContactApp />
  </HashRouter>
);
