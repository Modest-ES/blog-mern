import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header-shell">
      <header>
        <Link to="/" className="header-left">
          <img src="blogicon.png" alt="Logo" title="Logo" />
          <p>BlogMERN</p>
        </Link>
        <nav className="header-right">
          <Link to="/signin">
            <p>Sign In</p>
          </Link>
          <Link to="/signup">
            <p>Sign Up</p>
          </Link>
        </nav>
      </header>
    </div>
  );
}
