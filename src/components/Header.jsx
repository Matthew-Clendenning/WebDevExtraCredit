import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="header">
        <h1>IoT Data Site</h1>
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <span className="hamburger-icon">&#9776;</span>
        </div>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <nav>
                <ul>
                    <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                    <li><Link to="/viewer" onClick={toggleSidebar}>Data Viewer</Link></li>
                    <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
                    <li><Link to="/faq" onClick={toggleSidebar}>FAQ</Link></li>
                    <li><Link to="/services" onClick={toggleSidebar}>Services</Link></li>
                    <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
                </ul>
            </nav>
        </div>
        <div className="navbar" id="navbar">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/viewer">Data Viewer</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
