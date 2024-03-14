import { Avatar, Button, Card, Flex } from "antd";
import useAuth from "../contexts/authContext";
import { UserOutlined } from "@ant-design/icons";
import Typography from "antd/es/typography/Typography";

const Dashboard = () => {
  const { userData, logout } = useAuth();
  return (
    <div className="container-center">
      <Card
        style={{ minWidth: "450px", padding: "30px" }}
        className="text-center"
      >
        <Flex vertical gap="small" align="center">
          <Avatar size={130} icon={<UserOutlined />} />
          <Typography.Title level={3}>{userData.name}</Typography.Title>
          <Typography.Text type="secondary" level={3}>
            Email: {userData.email}
          </Typography.Text>
          <Typography.Text type="secondary" level={3}>
            Role: {userData.role}
          </Typography.Text>
          <Button
            type="primary"
            size="large"
            onClick={logout}
            style={{ marginTop: "40px" }}
          >
            Log out
          </Button>
        </Flex>
      </Card>
    </div>
  );
};

export default Dashboard;
