import ReactDOM from "react-dom/client";
import React from "react";

import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/global";
import Providers from "./Providers";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);
