import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";
import AddBook from "./pages/AddBook/AddBook";
import { clsx } from "clsx";
import { useScreen } from "./hooks";
import Header from "./components/Header/Header";

export const App = () => {
  const { isMobile } = useScreen();

  return (
    <div className={clsx('content', { mobile: isMobile })}>
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
