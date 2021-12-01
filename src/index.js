import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthState from "./Context/Auth/AuthState";
// import Practice from "./Components/Practice";

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <App />
    </AuthState>

    {/* <Practice /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
