import { createBrowserRouter, Navigate } from "react-router-dom";
import MAinLayout from "../layouts/MAinLayout";
import NewsCategoris from "../layouts/NewsCategoris";
import LoginLayout from "../layouts/LoginLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MAinLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <NewsCategoris />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },

  {
    path: "/news/:id",
    element: <NewsDetails />,
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

export default router;
