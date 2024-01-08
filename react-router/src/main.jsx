import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import Products from "./pages/Products";

const myCreatedRouter = createBrowserRouter([
  {
    path:'/',
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/products',
        element: <Products></Products>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRouter}></RouterProvider>
  </React.StrictMode>
);
