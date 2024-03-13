import axios from "axios";
import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Stack,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <Container className="vh-100">
      <Row>
        <Col>
          <Card className="p-5 m-auto border-0 mt-5" style={{ width: "30rem" }}>
            <h2 className="mb-4">Log In</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Control
                name="email"
                type="email"
                value={data.email}
                placeholder="Email address"
                className="my-2"
              />
              <Form.Control
                name="password"
                type="password"
                value={data.password}
                placeholder="Password"
                className="my-2"
              />

              {error && <Alert variant="danger">{error}</Alert>}

              <Button type="submit" variant="success" className="w-100">
                Log In
              </Button>
            </Form>
            <Stack className="text-center">
              <hr className="bg-secondary my-5" />
              New to our app?
              <br />
              <Link to="/">Sign Up</Link>
            </Stack>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
