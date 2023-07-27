import { clsx } from "clsx";
import { NavLink } from "react-router-dom";
import React from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useScreen } from "../../hooks";
import noAvatar from "../../assets/img/noavatar.png";
import { appActions } from "../../reducers/AppReducer";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { routes } from "../../routes/routes";
import { useLocation } from "react-router";
import { getRoute } from "../../utils";
import { CSSTransition } from "react-transition-group";

const MobileNavigation = () => {
  const { isMobile } = useScreen();
  const currentPage = useLocation().pathname;
  const title = getRoute(currentPage)?.label;

  const openMobileNavigate = useSelector(
    (state) => state.appReducer.openMobileNavigate
  );
  const dispatch = useDispatch();
  const handleToggleNavigation = (open) => {
    dispatch(appActions.setOpenNavigation(open));
  };

  return (
    <>
      <CSSTransition
        in={openMobileNavigate}
        timeout={300}
        classNames={{
          enterDone: "fade-enter",
          enter: "fade-enter",
          exit: "fade-exit",
        }}
      >
        <div className={clsx("dark-background")} />
      </CSSTransition>
      {isMobile && (
        <div
          className={clsx(style.mobileNavigation, {
            [style.mobileNavigationHide]: !openMobileNavigate,
          })}
        >
          <div className={style.mobileUser}>
            <div>
              <img src={noAvatar} alt="" />
            </div>
            <div className={style.usernameContainer}>
              <p>Привет,</p>
              <h2>Username</h2>
            </div>
            <button onClick={() => handleToggleNavigation(false)}>
              <SvgSelector id="close" />
            </button>
          </div>
          <div className={style.mobileContainer}>
            <div className={style.mobileRoutes}>
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
            <div className={style.auth}>
              <p>Sign In</p>
              <p>Registration</p>
            </div>
            <div className={style.footer}>
              <p>Powered by</p>
              <p>JS Community 21 Kazan</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MobileNavigation;
