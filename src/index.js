import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { TempTokenContextProvider } from "./store/TempTokenContext";

ReactDOM.render(
  <TempTokenContextProvider>
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  </TempTokenContextProvider>,

  document.getElementById("root")
);
