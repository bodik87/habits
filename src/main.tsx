import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { Create } from "./pages/Create";
import "./index.css";
import { Statistics } from "./pages/Statistics";
import { Edit } from "./pages/Edit";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Colors } from "./pages/Colors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
