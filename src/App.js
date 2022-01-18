import React from 'react';
import './App.css';
// import Calculator from './components/Calculator';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import CalculatorPage from './components/calculator-page';
import QuotesPage from './components/quotes-page';
import HomePage from './components/home-page';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
