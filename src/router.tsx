import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import { Create } from "./pages/Create";
import { Statistics } from "./pages/Statistics";
import { Edit } from "./pages/Edit";
import { Colors } from "./pages/Colors";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/create",
        element: <Create />,
        children: [
          {
            path: "/create/colors",
            element: <Colors />,
          },
        ],
      },
      {
        path: "/statistics/:id",
        element: <Statistics />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
        children: [
          {
            path: "/edit/:id/colors",
            element: <Colors />,
          },
        ],
      },
    ],
  },
]);
