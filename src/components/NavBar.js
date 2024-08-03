import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/Logo.png";
import { useLocation } from 'react-router-dom';

function NavBar() {
	const pageLocation = useLocation();

    return (
		<Navbar expand="lg">
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
				<Nav.Link href="/products" className={pageLocation.pathname === '/products' ? 'nav-current-page' : ''}>Products</Nav.Link>
				<Nav.Link href="/team" className={pageLocation.pathname === '/team' ? 'nav-current-page' : ''}>Team</Nav.Link>
				<Nav.Link href="/contacts" className={pageLocation.pathname === '/contacts' ? 'nav-current-page' : ''}>Contacts</Nav.Link>
			  </Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}


export default NavBar;