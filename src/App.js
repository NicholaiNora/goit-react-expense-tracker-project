import "./App.css";
import { Routes, Route } from "react-router-dom";
// import WelcomeHomePage from "./pages/WelcomeHomePage/WelcomeHomePage";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import TransactionsChart from "./components/TransactionsChart/TransactionsChart";
// import TransactionForm from "./components/TransactionForm/TransactionForm";
// import SharedLayout from "./components/SharedLayout - Non-Auth/SharedLayout";
import SharedLayoutAuth from "./components/SharedLayout - Auth/SharedLayoutAuth";
import HomePage from "./pages/HomePage/HomePage";
import ExpensePage from "./pages/ExpensePage/ExpensePage";
import IncomePage from "./pages/IncomePage/IncomePage";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomeHomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes> */}
      
      <Routes>
        <Route path="/" element={<SharedLayoutAuth />}>
          <Route index element={<HomePage />} />
          <Route path="/expense" element={<ExpensePage />} />
          <Route path="/income" element={<IncomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
