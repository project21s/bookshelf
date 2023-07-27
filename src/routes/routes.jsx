import Home from "../pages/Home/Home";
import React from "react";
import Book from "../pages/Book/Book";
import AddBook from "../pages/AddBook/AddBook";

export const routes = [
  {
    path: "/",
    label: "Главная",
    param: "",
    element: <Home />,
    isDisplay: true,
  },
  {
    path: "/book",
    label: "Твои книги",
    param: ":id",
    element: <Book />,
    isDisplay: true,
  },
  {
    path: "/rules",
    label: "Правила",
    param: "",
    element: <div>404 page</div>,
    isDisplay: true,
  },
  {
    path: "/addbook",
    label: "Добавить книгу",
    param: "",
    element: <AddBook />,
    isDisplay: true,
  },
];
