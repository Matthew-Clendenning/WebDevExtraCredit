import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import routes from './routes.js';
import Header from '../components/Header';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <div className='page-container'>
          <Routes>
            {routes.map((route, index) => (
              <Route 
                key={index} 
                path={route.path} 
                element={route.element} 
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App ;
