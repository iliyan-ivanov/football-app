import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { logout } from "../../services/userService";
import AuthContext from "../../contexts/AuthContext";
import "./Header.css";

const Header = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();

    logout()
      .then(res =>  navigate("/"))
      .catch(err => "Problem with logging out")
   
  }

  return (
    <header>
      <section className="header-section">
        <article className="header-logo">Football site</article>

        {user 
          ? (
            <article className="header-auth-btns">
              <Link className="header-auth-button" to="/create">Create</Link>
              <Link className="header-auth-button" to="/" onClick={onLogout}>Logout </Link>
            </article>
             ) 
          : (
            <article className="header-auth-btns">
              <Link className="header-auth-button" to="/login">Login</Link>
              <Link className="header-auth-button" to="/register">Register</Link>
            </article>
            )}
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
