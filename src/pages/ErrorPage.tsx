import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  useEffect(() => {
    setTimeout(() => {
      goHome();
    }, 3000);
  }, []);

  return (
    <div
      id="error-page"
      className="h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl">Oops! 😕</h1>
      <p>Sorry, page not found.</p>
      <p>You will be redirected to the home page in 3 seconds.</p>
    </div>
  );
}
