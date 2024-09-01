import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import WelcomeHomePage from "./pages/WelcomeHomePage/WelcomeHomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import TransactionsChart from "./components/TransactionsChart/TransactionsChart";
import TransactionForm from "./components/TransactionForm/TransactionForm";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<WelcomeHomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
