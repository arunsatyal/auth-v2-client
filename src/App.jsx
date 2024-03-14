import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import Dashboard from "./pages/dashboard";

import useAuth from "./contexts/authContext";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/register"
          element={
            !isAuthenticated ? <Register /> : <Navigate to="/dashboard" />
          }
        />
      </Routes>
    </>
  );
}

export default App;
