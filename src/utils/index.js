import { routes } from "../routes/routes";

export const getRoute = (currentPage) =>
  routes
    .filter((route) => route.isDisplay)
    .find((route) => route.path === currentPage);
