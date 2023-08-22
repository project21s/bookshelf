import React, { useState, useEffect, useContext } from "react";
import style from "./style.module.css";
import { routes } from "../../routes/routes";
import { NavLink } from "react-router-dom";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { clsx } from "clsx";
import { useLocation } from "react-router";
import { useScreen } from "../../hooks";
import { useDispatch } from "react-redux";
import { appActions } from "../../reducers/AppReducer";
import { getRoute } from "../../utils";
import MobileNavigation from "./MobileNavigation";
import { PopUp } from "../PopUp/PopUp";
import AppButton from "../AppButton/AppButton";
import { userStatus, logOut } from "../../services/authApiServes";
import { UserContext } from "../../contexts/UserContext";

const Header = () => {
  const { isMobile } = useScreen();
  const currentPage = useLocation().pathname;
  const title = getRoute(currentPage)?.label;

  const dispatch = useDispatch();
  const handleToggleNavigation = (open) => {
    dispatch(appActions.setOpenNavigation(open));
  };

  let [openLogin, setOpenLogin] = useState(false);

  const { user, userDispatch } = useContext(UserContext);

  return (
    <>
      {openLogin && <PopUp close={setOpenLogin} />}
      <div className={style.container}>
        <div className={style.logo}>
          <NavLink to="/">
            <SvgSelector id="logo" />
          </NavLink>
        </div>
        <div className={style.navigation}>
          {routes
            .filter((route) => route.isDisplay)
            .map((route, index) => (
              <NavLink
                key={index}
                to={route.path}
                className={clsx(style.navlink, {
                  [style.active]: title === route.label,
                })}
              >
                {route.label}
              </NavLink>
            ))}
        </div>
        {!isMobile ? (
          <div className={style.user}>
            {user ? (
              <div className={style.log}>
                Привет, {user.nickname}
                <div
                  className={style.out}
                  onClick={() =>
                    logOut().then(() => {
                      userDispatch({
                        type: "delete",
                        user: null,
                      });
                    })
                  }
                >
                  <AppButton header="выйти" red={true}></AppButton>
                </div>
              </div>
            ) : (
              <h1 onClick={() => setOpenLogin(true)}>Войти</h1>
            )}
          </div>
        ) : (
          <button onClick={() => handleToggleNavigation(true)}>
            <SvgSelector id="burger" />
          </button>
        )}
        <MobileNavigation
          user={user}
          setOpenLogin={setOpenLogin}
          openLogin={openLogin}
        />
      </div>
    </>
  );
};

export default Header;
