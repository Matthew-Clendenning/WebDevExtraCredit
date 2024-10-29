import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes.js';
import Header from '../components/Header';
import React, { Suspense } from 'react';

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="page-container">
          <Suspense fallback={<div>Loading...</div>}>
            <AppRoutes />
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
