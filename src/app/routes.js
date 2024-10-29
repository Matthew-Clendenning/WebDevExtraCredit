import HomePage from '../pages/HomePage';
import DataViewerPage from '../pages/DataViewerPage';
import AboutPage from '../pages/AboutPage';
import FAQPage from '../pages/FAQPage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';
import WebDevelopment from '../pages/WebDev';
import MobileDevelopment from '../pages/MobileDev';
import Consulting from '../pages/Consulting';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/viewer', element: <DataViewerPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/faq', element: <FAQPage /> },
  { path: '/contact', element: <ContactPage /> },
  { 
    path: '/services', 
    element: <ServicesPage />, 
    children: [
      { path: 'web-development', element: <WebDevelopment /> },
      { path: 'mobile-development', element: <MobileDevelopment /> },
      { path: 'consulting', element: <Consulting /> },
    ]
  },
];

export default routes;