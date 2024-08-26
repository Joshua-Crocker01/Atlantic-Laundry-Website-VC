import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/Logo.png";
import { useLocation } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const NavBar = () => {
	const pageLocation = useLocation();

    return (
		<Navbar expand="lg" sticky="top">
			<Navbar.Brand>
				<img 
				src={Logo}
				alt="Atlantic Laundry Logo"/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			  <Nav className="ms-auto">
				<Nav.Link href="/home" className={pageLocation.pathname === '/home' ? 'nav-current-page' : ''}>Home</Nav.Link>
				<Nav.Link href="/services" className={pageLocation.pathname === '/services' ? 'nav-current-page' : ''}>Services</Nav.Link>
				<NavDropdown title="Products" id="basic-nav-dropdown">
					<NavDropdown.Item href="/products/washers">Washers</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="/products/dryers">Dryers</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="/products/specialty">Specialty<br/>Equipment</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link href="/team" className={pageLocation.pathname === '/team' ? 'nav-current-page' : ''}>Team</Nav.Link>
				<Nav.Link href="/contacts" className={pageLocation.pathname === '/contacts' ? 'nav-current-page' : ''}>Contacts</Nav.Link>
			  </Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}


export default NavBar;