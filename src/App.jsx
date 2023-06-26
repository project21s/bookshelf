import React from "react";
// import Home from "./pages/Home";
// import Book from "./pages/Book";
// import AddBook from "./pages/AddBook";
import { AppButton } from "./components/AppButton/AppButton";

export const App = () => {
  return (
    <>
      {/* <Home /> */}
      <br />
      <h5>small</h5>
      <AppButton size={"s"} header={"Добавить книгу"} />
      <br />
      <br />

      <h5>medium</h5>
      <AppButton size={"m"} header={"Добавить книгу"} />
      {/* <Book /> */}
      {/* <AddBook /> */}
    </>
  );
};
