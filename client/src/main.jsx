import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { BrowserRouter } from "react-router-dom";
import "./assets/index.css";
import { ContactProvider } from "./context/ContactContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContactProvider>
      <App />
    </ContactProvider>
  </BrowserRouter>
);
