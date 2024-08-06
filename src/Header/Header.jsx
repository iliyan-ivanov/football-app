import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <section className="header-section">
        <article className="header-logo">Football site</article>
        <article className="header-auth-btns">
          <Link className="header-auth-button">Login</Link>
          <Link className="header-auth-button">Register</Link>
        </article>
      </section>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/europianfootball">Europian football</Link>
          </li>
          <li>
            <Link to="/bulgarianfootball">Bulgarian football</Link>
          </li>
          <li>
            <Link to="/nationalteams">National Teams</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;