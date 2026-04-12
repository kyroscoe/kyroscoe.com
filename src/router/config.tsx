
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Services from "../pages/services/page";
import Development from "../pages/development/page";
import WebDesign from "../pages/web-design/page";
import Contact from "../pages/contact/page";
import Booking from "../pages/booking/page";
import Privacy from "../pages/privacy/page";
import Terms from "../pages/terms/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/development",
    element: <Development />,
  },
  {
    path: "/web-design",
    element: <WebDesign />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
