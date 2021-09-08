import * as React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const TopNav = () => {
    return (
        <Navbar variant="dark" expand="lg" bg="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#">Shaurya Gaur</Navbar.Brand>
                <Navbar.Toggle aria-controls="nav-topbar" />
                <Navbar.Collapse
                    id="nav-topbar"
                    className="justify-content-end"
                >
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/xp">Experience</Nav.Link>
                        <Nav.Link href="/work">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;
