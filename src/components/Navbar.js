import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <h1>Mathemagic</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="calculator">Calculator</Link>
        <Link to="quotes">Quotes</Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
