import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";
import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && <Link to="/">Dashboard</Link>}
        {ctx.isLoggedIn && <Link to="/admin">Admin</Link>}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}> Logout </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
