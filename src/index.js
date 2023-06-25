import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Home from "./pages/Home";
import Book from "./pages/Book";
// import AddBook from "./pages/AddBook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Book />
    {/* <AddBook /> */}
  </React.StrictMode>
);
