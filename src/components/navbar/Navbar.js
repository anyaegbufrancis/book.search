import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./navbar.css";

function NavComponent() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbar"
    >
      <Navbar.Brand href="/" className="search">
        Google Book Search
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>

        <Nav variant="pills" className="search" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/" eventKey="link-1" className="search-search">
              Search
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/saved" eventKey="link-2" className="search-saved">
              Saved
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavComponent;
