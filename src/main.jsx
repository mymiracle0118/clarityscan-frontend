import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { AppRouter } from "@/router/AppRouter";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <AppRouter />
    </CookiesProvider>
  </React.StrictMode>
);
