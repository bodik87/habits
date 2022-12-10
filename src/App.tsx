import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./components/ui/Navigation/Navigation";
import { Home } from "./pages/Home";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? <Home /> : <Outlet />}
      <Navigation />
    </>
  );
}

export default App;
