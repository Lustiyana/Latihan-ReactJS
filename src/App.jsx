import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import Root from "./layout/root";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/login";
import CheckIfLogin from "./helper/CheckIfLogin";
import Register from "./pages/register";
import Details from "./pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "home",
        element: (
          <CheckIfLogin>
            <Home />
          </CheckIfLogin>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "",
        element: <Navigate to={"/home"} />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },
      {
        path: "home/:id",
        element: <Details />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
