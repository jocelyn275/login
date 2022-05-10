import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import MainHeader from "./components/MainHeader/MainHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContext from "./context/auth-context";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <>
      <Router>
        {ctx.isLoggedIn && <MainHeader />}
        <main>{!ctx.isLoggedIn && <Login />}</main>
        <Routes>
          <Route path="/" exact element={ctx.isLoggedIn && <Home />} />
          <Route path="/admin" exact element={ctx.isLoggedIn && <Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
