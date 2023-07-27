import Home from "../pages/Home/Home";
import React from "react";
// import Book from "../pages/Book/Book";
import AddBook from "../pages/AddBook/AddBook";
import MyBooks from "../pages/MyBooks/MyBooks";

export const routes = [
  {
    path: "/main",
    label: "Главная",
    param: "",
    element: <Home />,
    isDisplay: true,
  },
  {
    path: "/",
    label: "Главная",
    param: "",
    element: <Home />,
    isDisplay: false,
  },
  {
    path: "/mybooks",
    label: "Твои книги",
    param: "",
    element: <MyBooks />,
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
