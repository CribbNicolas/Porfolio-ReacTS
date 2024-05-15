import { RouterProvider as RouterProviderDOM } from "react-router-dom";
import { router } from "../react-router/router";

const RouterProvider = () => <RouterProviderDOM router={router} />;

export default RouterProvider;
