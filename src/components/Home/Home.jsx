import { useAuth } from "../../hooks/useAuth";
import WelcomeHomePage from "../../pages/WelcomeHomePage/WelcomeHomePage";
import HomePage from "../../pages/HomePage/HomePage";

export const Home = () => {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? <HomePage />: <WelcomeHomePage />}</>;
};
