// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Nav from './UI/Navbar';

export default function Header() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Nav
      links={[
        <Link key={1} className="nav-link" to="/">
          About Me
        </Link>,
        <Link key={2} className="nav-link" to="/projects">
          Projects
        </Link>,
        <Link key={3} className="nav-link" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="nav-link" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}