import React from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import News from "pages/News";
import Home from "pages/Home";
import Career from "pages/Career";
import Company from "pages/Company";
import Services from "pages/Services";
import Contacts from "pages/Contacts";
import NotFound from "pages/NotFound";
import Projects from "pages/Projects";
import DetailNews from "pages/DetailNews";
import DetailProject from "pages/DetailProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/company/",
    element: <Company />,
  },
  {
    path: "/projects/",
    element: <Projects />,
  },
  {
    path: "/projects/:id/",
    element: <DetailProject />,
  },
  {
    path: "/services/",
    element: <Services />,
  },
  {
    path: "/career/",
    element: <Career />,
  },
  {
    path: "/contacts/",
    element: <Contacts />,
  },
  {
    path: "/news/",
    element: <News />,
  },
  {
    path: "/news/:id/",
    element: <DetailNews />,
  },
  {
    path: "/404/",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/404/" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default React.memo(App);
