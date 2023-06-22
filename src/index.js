import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Home from "./pages/Home";
import Book from "./pages/Book";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Book />
  </React.StrictMode>
);
