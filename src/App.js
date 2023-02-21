import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LiquorLandingPage from './components/liquorLandingPage/liquorLandingPage';

function App() {
  return (
    <div className="background-color">
        <>
      <Router>
        <Routes>
          <Route path="/" element={<LiquorLandingPage/>} />
        </Routes>
      </Router>

      </>
    </div>
  );
}

export default App;
