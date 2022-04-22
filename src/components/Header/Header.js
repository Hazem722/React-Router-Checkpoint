import React from "react";
import Filter from "../Filter/Filter";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ searchValue, setSearchValue, setStars, stars }) {
  return (
    <div className="Header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Top Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
          </Nav>
          <Filter
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            stars={stars}
            setStars={setStars}
          />
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
