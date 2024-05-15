import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../(routes)/App";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/asd",
        element: <App />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
