import { Card, Flex, Form, Input, Button, Typography, Alert } from "antd";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const Register = () => {
  const { loading, error, registerUser } = useSignup();

  const handleRegister = (values) => {
    registerUser(values);
  };
  return (
    <div className="container-center">
      <Card style={{ width: "30rem", padding: "20px" }}>
        <Flex gap="middle" vertical>
          <Typography.Title>Create new account</Typography.Title>
          <Form layout="vertical" onFinish={handleRegister}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please provide your full name",
                },
              ]}
            >
              <Input placeholder="Your full name" size="large" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please provide your valid email address",
                },
              ]}
            >
              <Input placeholder="Email address" size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please create password",
                },
              ]}
            >
              <Input.Password placeholder="Create password" size="large" />
            </Form.Item>

            <Form.Item
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password",
                },
              ]}
            >
              <Input.Password placeholder="Confirm password" size="large" />
            </Form.Item>

            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              >
                Test
              </Alert>
            )}

            <Button
              size="large"
              type={`${loading ? "primary" : "primary"}`}
              htmlType="submit"
              block
            >
              {`${loading ? "Please wait..." : "Create account"}`}
            </Button>
          </Form>
          <Typography.Text style={{ marginTop: "30px" }} align="center">
            Already registered with us?
          </Typography.Text>
          <Link to={"/login"}>
            <Button size="large" block>
              Log In
            </Button>
          </Link>
        </Flex>
      </Card>
    </div>
  );
};

export default Register;
