import { useState } from "react";
import { message } from "antd";
import useAuth from "../contexts/authContext";

const useLogin = () => {
  const { login } = useAuth(); // Corrected: Call useAuth() to use the login function
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Corrected: Initialize loading as false

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 200) {
        message.success(data.message);
        login(data.token, data.user); // Assuming login is correctly implemented to handle these arguments
      } else if (res.status === 404) {
        setError(data.message);
      } else {
        message.error("Login failed");
      }
    } catch (error) {
      setError(`Registration failed: ${error.message || error.toString()}`);
      message.error(
        `Registration failed: ${error.message || error.toString()}`
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, loginUser };
};

export default useLogin;
