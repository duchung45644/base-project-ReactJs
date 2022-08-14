//Layouts
import { ErrorLayout } from "~/components/Layout";

import Home from "~/pages/Home";
import Information from "~/pages/Information";

// Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/information", component: Information, layout: ErrorLayout },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
