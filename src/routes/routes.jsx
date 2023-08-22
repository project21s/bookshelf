import Home from "../pages/Home/Home";
import React from "react";
// import Book from "../pages/Book/Book";
import AddBook from "../pages/AddBook/AddBook";
import MyBooks from "../pages/MyBooks/MyBooks";
import Feedback from "../pages/Feedback/Feedback";

export const routes = [
  {
    path: "/",
    label: "Главная",
    param: "",
    element: <Home />,
    isDisplay: true,
  },
  {
    path: "/mybook",
    label: "Твои книги",
    param: "",
    element: <MyBooks />,
    isDisplay: true,
  },
  // {
  //   path: "/rules",
  //   label: "Правила",
  //   param: "",
  //   element: <div>404 page</div>,
  //   isDisplay: true,
  // },
  {
    path: "/addbook",
    label: "Добавить книгу",
    param: "",
    element: <AddBook />,
    isDisplay: true,
  },
  {
    path: "/feedback",
    label: "Обратная связь",
    param: "",
    element: <Feedback />,
    isDisplay: true,
  },
];
