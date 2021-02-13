import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const nav = () => {
  const user = false;
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/home">
        glasswindow
      </Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={user ? "/profile" : "/signin"}>
            Profile
          </Nav.Link>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Separated</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default nav;
