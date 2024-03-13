import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./components/loginPage";
import SignupPage from "./components/signupPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const App = () => {
  const user = localStorage.getItem("token");
  return (
    <>
      <Routes>
        {user && <Route path="/" element={<Home />} />}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
