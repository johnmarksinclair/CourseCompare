import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import {
  Navbar,
  Nav,
  NavDropdown,
  // Form,
  // FormControl,
  // Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";

const _Nav = () => {
  const user = useContext(UserContext);
  return (
    <div className="flexnone">
      <Navbar bg="light" variant="light" expand="md" className="py-3">
        <Navbar.Brand as={Link} to="/">
          Course Compare
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user ? (
            <>
              <Nav className="mr-auto">
                {/* <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link> */}
                <Nav.Link as={Link} to="/coursesearch">
                  Courses
                </Nav.Link>
                <Nav.Link as={Link} to="/loans">
                  Loans
                </Nav.Link>
              </Nav>
              {/* <Nav className="mr-auto">
                <Form inline>
                  <FormControl placeholder="Search" className="mr-sm-2" />
                  <Button variant="primary">Search</Button>
                </Form>
              </Nav> */}
              <Nav bg="primary" variant="dark">
                <NavDropdown title="My Account" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/"
                    onClick={() => auth.signOut()}
                  >
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </>
          ) : (
            <button
              className="ml-auto homebtn"
              onClick={() => signInWithGoogle()}
            >
              Sign In
            </button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default _Nav;
