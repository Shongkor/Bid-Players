import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Showcase from './components/DisplayPlayers/DisplayPlayers';
import { Navbar, Nav } from 'react-bootstrap';

//Navbar by bootstrap
function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Players Zone</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">

            <Nav.Link href="#pricing">Team</Nav.Link>
            <Nav.Link href="#pricing">Category</Nav.Link>
            <Nav.Link href="#pricing">Country</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">X</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Header classname='header'></Header>
      <Showcase></Showcase>
    </div>
  );
}

export default App;
