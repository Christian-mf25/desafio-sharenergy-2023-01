import ReactDOM from "react-dom/client";
import React from "react";

import { GlobalStyle } from "./Styles/global";
import App from "./App";
import Providers from "./Providers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Providers>
      <GlobalStyle />
      <App />
    </Providers>
  </React.StrictMode>
);
