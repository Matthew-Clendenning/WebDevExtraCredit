import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/App.css';

function ServicesPage() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <nav className="services-nav">
        <Link to="web-development" className="services-link">Web Development</Link> | 
        <Link to="mobile-development" className="services-link">Mobile Development</Link> | 
        <Link to="consulting" className="services-link">Consulting</Link>
      </nav>
      <Suspense fallback={<div>Loading service...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default ServicesPage;
