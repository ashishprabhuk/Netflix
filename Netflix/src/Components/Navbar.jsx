import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Navbar.css'
import { IoSearch } from "react-icons/io5";

function TopBar() {
    return (
        <Navbar expand="lg" className="body">
            <Container fluid>
                <Navbar.Brand id="brand" href="#">GuVideos</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="justify-content-center" style={{ maxHeight: "100px" }} navbarScroll>
                        <Nav.Link id="home" href="#action1">Home</Nav.Link>
                        <Nav.Link id="link" href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScroll">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex ms-auto">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button id="btn">
                            <IoSearch />
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;
