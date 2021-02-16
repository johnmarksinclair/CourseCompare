import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const _Nav = (props) => {
  const handleSignOut = () => {
    props.setUser(false);
  };
  return (
    <div className="flexnone">
      <Navbar bg="light" variant="light" expand="md">
        <Navbar.Brand as={Link} to="/">
          glasswindow
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {props.user ? (
            <>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/courses">
                  Courses
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => {
                    handleSignOut();
                  }}
                >
                  Sign Out
                </Nav.Link>
              </Nav>
              <Form inline>
                <InputGroup>
                  <FormControl placeholder="Search" />
                  <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </>
          ) : (
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/signin">
                Sign In
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default _Nav;
