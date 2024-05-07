import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">Best Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <LinkContainer to="/"><Nav.Link href="#home">Home</Nav.Link></LinkContainer>
        </Nav>
        <LinkContainer to="/dashboard"><Button variant='dark'>Dashbaord</Button></LinkContainer>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header