import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { logout } from "../../services/userService";
import AuthContext from "../../contexts/AuthContext";
import { FaAngleDown } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  const [showNav, setShowNav ] = useState(true);

  const onLogout = (e) => {
    e.preventDefault();

    logout()
      .then(() =>  navigate("/"))
      .catch(() => "Problem with logging out")
   
  }

  const onShowNavbar = (e) => {
    e.preventDefault();
    
    showNav == true ? setShowNav(false) : setShowNav(true)
    
  }

  return (
    <header>
      <section className="header-section">
        <Link className="header-logo" to="/" >Football site</Link>

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
      <section className="header-nav-icon" onClick={onShowNavbar}>
        <article>Categories</article>
        <FaAngleDown />
      </section>
      <nav className="header-nav" style={{display: showNav ? 'block' : 'none' }}>
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
