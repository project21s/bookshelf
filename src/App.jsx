import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";
import AddBook from "./pages/AddBook/AddBook";
import { clsx } from "clsx";
import { useScreen } from "./hooks";
import Header from "./components/Header/Header";

import {
  createUser,
  logIn,
  userStatus,
  resetPassword,
  logOut,
} from "./services/authApiServes";

export const App = () => {
  const { isMobile } = useScreen();

  return (
    <div
      className={clsx("content", { mobile: isMobile }, { dekstop: !isMobile })}
    >
      <div>
        <h1>Fire Test</h1>
        <button
          onClick={() => {
            createUser("test2@mail.com", "qwertyuw");
          }}
        >
          регистрация
        </button>
        <button onClick={userStatus}>статус</button>
        <button
          onClick={() => {
            resetPassword("ewqewqewq");
          }}
        >
          новый пароль
        </button>
        <button
          onClick={() => {
            logIn("test2@mail.com", "ewqewqewq");
          }}
        >
          войти
        </button>

        <button onClick={logOut}>выйти</button>
      </div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
