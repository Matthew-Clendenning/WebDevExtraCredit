import React, { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const DataViewerPage = lazy(() => import('../pages/DataViewerPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const FAQPage = lazy(() => import('../pages/FAQPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const WebDevelopment = lazy(() => import('../pages/WebDev'));
const MobileDevelopment = lazy(() => import('../pages/MobileDev'));
const Consulting = lazy(() => import('../pages/Consulting'));

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
    ],
  },
];

export default routes;
