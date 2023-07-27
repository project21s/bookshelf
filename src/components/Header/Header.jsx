import React from "react";
import style from "./style.module.css";
import { routes } from "../../routes/routes";
import { NavLink } from "react-router-dom";
import { SvgSelector } from "../SvgSelector/SvgSelector";
// import noAvatar from "../../assets/img/noavatar.png";
import { clsx } from "clsx";
import { useLocation } from "react-router";
import { useScreen } from "../../hooks";
import { useDispatch } from "react-redux";
import { appActions } from "../../reducers/AppReducer";
import { getRoute } from "../../utils";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const { isMobile } = useScreen();
  const currentPage = useLocation().pathname;
  const title = getRoute(currentPage)?.label;

  const dispatch = useDispatch();
  const handleToggleNavigation = (open) => {
    dispatch(appActions.setOpenNavigation(open));
  };

  return (
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
          <h1>Username</h1>
          {/* <div>
            <img src={noAvatar} alt="" />
          </div> */}
        </div>
      ) : (
        <button onClick={() => handleToggleNavigation(true)}>
          <SvgSelector id="burger" />
        </button>
      )}
      <MobileNavigation />
    </div>
  );
};

export default Header;
