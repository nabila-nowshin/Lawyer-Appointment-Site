import {
    createBrowserRouter,
  } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../Components/Home/Home";

import Blogs from "../Components/Blogs/Blogs";
import Booking from "../Components/Booking/Booking";

  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children: [
        {
            index: true,
            path:"/",
            loader:()=>fetch('lawyers.json'),
            Component: Home
        },
        {
          path:"/booking",
          Component: Booking
        },
        {
          path:"/blogs",
          Component: Blogs
        },
      ]
    },
  ]);

