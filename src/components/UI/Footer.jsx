import '../Footer.css'

export default function Nav({ links }) {
  return (
    <nav className="footer">
      <div className="container-fluid">
          <ul className="footer-nav">
            {links.map((link) => link)}
          </ul>
      </div>
    </nav>
  );
}