// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Nav from './UI/Footer';

export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Nav
      links={[
        <Link key={1} className="footer-link" to="https://github.com/JakeWilly14"><img className='footer-img' src='github-mark.png'></img></Link>,
        <Link key={2} className="footer-link" to="https://www.linkedin.com/in/jacob-williams-243657219/"><img className='footer-img' src='linkedin.png'></img></Link>,
        <Link key={3} className="footer-link" to="https://stackoverflow.com/users/22473653/jacob-williams"><img className='footer-img' src='stackoverflow.png'></img></Link>,
      ]}
    />
  );
}