import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          React
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
