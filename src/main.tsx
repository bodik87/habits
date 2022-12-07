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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<App />}
      path="/"
      // errorElement={<Error />}
    >
      <Route element={<Create />} path="/create" />
      <Route element={<Statistics />} path="/statistics/:id" />
      <Route element={<Edit />} path="/edit/:id" />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
