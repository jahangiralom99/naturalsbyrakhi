import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import { loader } from "../utilities/loader";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader : loader, // loader for data fetching  
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Route;
