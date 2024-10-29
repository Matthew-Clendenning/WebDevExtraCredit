import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function ServicesPage() {
  const location = useLocation();
  
  return (
    <div>
      <h1>Our Services</h1>
      <nav>
        <Link to="web-development">Web Development</Link> | 
        <Link to="mobile-development">Mobile Development</Link> | 
        <Link to="consulting">Consulting</Link>
      </nav>
      
      {/* Display service details only on nested routes */}
      {location.pathname === "/services" ? (
        <div>
          <h2>Available Services</h2>
          <ul>
            <li><Link to="web-development">Web Development</Link> - Build responsive websites.</li>
            <li><Link to="mobile-development">Mobile Development</Link> - Create mobile applications.</li>
            <li><Link to="consulting">Consulting</Link> - Get expert advice and solutions.</li>
          </ul>
        </div>
      ) : (
        <Outlet />  // Renders the child route component when a nested route is selected
      )}
    </div>
  );
}

export default ServicesPage;
