import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./Styling/index.css";
import "./Styling/login.css";
import "./Styling/register.css";
import "./Styling/event-container.css";
import "./Styling/events-page.css";
import "./Styling/event-create.css";
import "./Styling/event-details.css";
import "./Styling/checkbox.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-notifications/lib/notifications.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
