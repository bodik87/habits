import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { CreateHabit } from "./pages/CreateHabit";
import "./index.css";
import { HabitStatistics } from "./pages/HabitStatistics";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<App />}
      path="/"
      // errorElement={<Error />}
    >
      <Route element={<CreateHabit />} path="/create" />
      <Route element={<HabitStatistics />} path="/:id" />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
  // <App />
);
