import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes.js';
import Header from '../components/Header';
import React, { Suspense } from 'react';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="page-container">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map((route, index) => (
                <Route 
                  key={index} 
                  path={route.path} 
                  element={route.element} 
                />
              ))}
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
