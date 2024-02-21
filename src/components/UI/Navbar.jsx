import '../Header.css'

export default function Nav({ links }) {
  return (
    <nav className="navbar">
      <h1>Jacob Williams</h1>
      <div className="container-fluid">
          <ul className="navbar-nav">
            {links.map((link) => link)}
          </ul>
      </div>
    </nav>
  );
}