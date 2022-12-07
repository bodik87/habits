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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<App />}
      path="/"
      // errorElement={<Error />}
    >
      <Route element={<Create />} path="/create" />
      <Route element={<Statistics />} path="/:id" />
      <Route element={<Edit />} path="/edit:id" />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
  // <App />
);
