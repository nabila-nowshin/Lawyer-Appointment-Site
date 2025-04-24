import {
    createBrowserRouter,
  } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../Components/Home/Home";

import Blogs from "../Components/Blogs/Blogs";
import Booking from "../Components/Booking/Booking";
import LawyerDetails from "../Components/LawyerDetails/LawyerDetails";
import ErrorPage from "../Components/Error/ErrorPage";
import Navbar from "../Components/Header/Navbar";

  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children: [
        {
            index: true,
            path:"/",
            loader:()=>fetch('/lawyers.json'),
            Component: Home
        },
        {
          path:"booking",
          loader:()=>fetch('/lawyers.json'),
          Component: Booking
        },
        {
          path:"blogs",
          loader:()=>fetch('/questions.json'),
          Component: Blogs
        },
        {
          path:"Lawyer/:id",
          loader:()=>fetch('/lawyers.json'),
          Component: LawyerDetails
        },
      ]
    },
    {
      path: '*',
      element: (
        <>
          <Navbar /> 
          <ErrorPage /> 
        </>
      ),
    }
  ]);

