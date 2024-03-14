import { useState } from "react";
import { message } from "antd";
import useAuth from "../contexts/authContext";

const useSignup = () => {
  const { login } = useAuth(); // Corrected: Call useAuth() to use the login function
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Corrected: Initialize loading as false

  const registerUser = async (values) => {
    if (values.password !== values.passwordConfirm) {
      setError("Passwords are not the same.");
      return; // Early return after setting the error
    }

    try {
      setError(null);
      setLoading(true);
      const res = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 201) {
        message.success(data.message);
        login(data.token, data.user); // Assuming login is correctly implemented to handle these arguments
      } else {
        // Handling non-201 responses generically since the specific 4000 code seems to be a typo
        setError(data.message || "Registration failed.");
        message.error(data.message || "Registration failed.");
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
  return { loading, error, registerUser };
};

export default useSignup;
