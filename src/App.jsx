import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";
import AddBook from "./pages/AddBook/AddBook";
import { clsx } from "clsx";
import { useScreen } from "./hooks";
import Header from "./components/Header/Header";
import MyBooks from "./pages/MyBooks/MyBooks";
import Feedback from "./pages/Feedback/Feedback";

import AppAlert from "./components/AppAlert/AppAlert";

import { userStatus } from "./services/authApiServes";
import userReducer from "./reducers/userReducer";
import { UserContext } from "./contexts/UserContext";
import { InfoContext } from "./contexts/InfoContext";

export const App = () => {
  const { isMobile } = useScreen();

  const [user, userDispatch] = useReducer(userReducer, null);

  const [isOpenAlert, setIsOpenAlert] = useState({ state: false });
  const showAlert = (alert) => {
    setIsOpenAlert({ state: true, alert: alert, left: 20 });
    setTimeout(() => {
      setIsOpenAlert({ state: false, alert: alert, left: -220 });
    }, 3000);
  };

  const status = async () => {
    const tempUser = await userStatus();
    if (tempUser) {
      userDispatch({
        type: "update",
        user: tempUser,
      });
    }
    console.log(user);
  };
  useEffect(() => {
    status();
  }, []);

  return (
    <div
      className={clsx("content", { mobile: isMobile }, { dekstop: !isMobile })}
    >
      <AppAlert left={isOpenAlert.left}>{isOpenAlert.alert}</AppAlert>
      <InfoContext.Provider value={showAlert}>
        <UserContext.Provider value={{ user, userDispatch }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mybook" element={<MyBooks />} />
              <Route path="/book/:id" element={<Book />} />
              <Route path="/addbook" element={<AddBook />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </InfoContext.Provider>
    </div>
  );
};
