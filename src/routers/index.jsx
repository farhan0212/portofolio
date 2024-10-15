import { createBrowserRouter } from "react-router-dom";
import Experiences from "../pages/Experiences";
import Projects from "../pages/Projects";
import Homepage from "../layouts/RootLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/experiences", element: <Experiences /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);
