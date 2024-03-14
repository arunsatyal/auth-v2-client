import { Card, Flex, Form, Input, Button, Typography, Alert, Spin } from "antd";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { error, loading, loginUser } = useLogin();
  const handleLogin = async (values) => {
    await loginUser(values);
  };
  return (
    <div className="container-center">
      <Card style={{ width: "30rem", padding: "20px" }}>
        <Flex gap="middle" vertical>
          {/* form */}

          <Typography.Title>Log In to Account</Typography.Title>

          <Form layout="vertical" onFinish={handleLogin}>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please enter your email address",
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
                  message: "Please enter your password",
                },
              ]}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>

            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              ></Alert>
            )}

            <Button
              size="large"
              type={`${loading ? "" : "primary"}`}
              htmlType="submit"
              block
            >
              {`${loading ? <Spin /> : "Log In"}`}
            </Button>
          </Form>
          <Typography.Text style={{ marginTop: "30px" }} align="center">
            New to our family?
          </Typography.Text>
          <Link to={"/register"}>
            <Button size="large" block>
              Create an account
            </Button>
          </Link>

          {/* image */}
          <Flex></Flex>
        </Flex>
      </Card>
    </div>
  );
};

export default Login;
