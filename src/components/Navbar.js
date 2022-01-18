import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
  <header>
    <nav>
      <h1>Mathemagic</h1>
      <div className="nav">
        <Link to="math-magicians/">Home</Link>
        <Link to="math-magicians/calculator">Calculator</Link>
        <Link to="math-magicians/quotes">Quotes</Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
