import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ExpensePage from "./pages/ExpensePage/ExpensePage";
import IncomePage from "./pages/IncomePage/IncomePage";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home/Home";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/authOperations";



function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/" component={<LoginPage />} />
          }
        />
        <Route
          path="/income"
          element={
            <PrivateRoute redirectTo="/login" component={<IncomePage />} />
          }
        />
        <Route
          path="/expense"
          element={
            <PrivateRoute redirectTo="/login" component={<ExpensePage />} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
