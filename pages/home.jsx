import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card className=" bg-primary p-5 text-center">
            <h2>Dashboard</h2>
            <Button
              type="submit"
              variant="danger"
              className="my-5 w-100"
              onSubmit={handleLogout}
            >
              Log Out
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
