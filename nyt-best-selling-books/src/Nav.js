import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {

  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  };


  return (
    <nav className="nav">
      <h3>NYC Best Selling Books List | <i class="fas fa-book"></i></h3>
      
      <ul className="nav-links">
        <Link style={navStyle} to='/hardcoverfiction'>
          <li>Hardcover Fiction</li>
        </Link>
        <Link style={navStyle} to='/hardcovernonfiction'>
          <li>Hardcover Nonfiction</li>
        </Link>
        <Link style={navStyle} to='/paperbackfiction'>
          <li>Paperback Fiction</li>
        </Link>
        <Link style={navStyle} to='/paperbacknonfiction'>
          <li>Paperback Nonfiction</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
