// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-icon" to="https://github.com/JakeWilly14"><img src='github-mark.png'></img></Link>,
        <Link key={2} className="nav-link text-light" to="https://www.linkedin.com/in/jacob-williams-243657219/"><img src='linkedin.png'></img></Link>,
        <Link key={3} className="nav-link text-light" to="https://stackoverflow.com/users/22473653/jacob-williams"><img src='stackoverflow.png'></img></Link>,
      ]}
    />
  );
}