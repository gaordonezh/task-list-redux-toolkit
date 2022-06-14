import { lazy } from "react";
import Loadable from "./Loadable";
// ----------------------------------------------------------------------
const Page404 = Loadable(lazy(() => import("pages/Errors/Page404")));
// ----------------------------------------------------------------------
const AdminLayout = Loadable(lazy(() => import("layouts/AdminLayout")));
const PublicLayout = Loadable(lazy(() => import("layouts/PublicLayout")));
// ----------------------------------------------------------------------
const Login = Loadable(lazy(() => import("pages/Login")));
// ----------------------------------------------------------------------
const Home = Loadable(lazy(() => import("pages/Home")));
const Profile = Loadable(lazy(() => import("pages/Profile")));

const routes = [
  {
    path: "",
    element: PublicLayout,
    isPrivate: false,
    children: [
      { path: "", element: Login },
      { path: "*", element: Page404 },
    ],
  },
  {
    path: "/",
    element: AdminLayout,
    isPrivate: true,
    children: [
      { path: "tasks", element: Home },
      { path: "profile", element: Profile },
      { path: "*", element: Page404 },
    ],
  },
];

export default routes;
