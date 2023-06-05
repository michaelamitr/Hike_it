import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from 'react-router-dom';
import './style.css';
import { Header } from './components/Header/header';
import { Footer } from './components/Footer/footer';
import { MainPage } from './pages/MainPage/mainpage';
import { AllTrails } from './pages/AllTrails/alltrails';
import { HumansAndNature } from './pages/HumansAndNature/humansandnature';
import { Contacts } from './pages/Contact/contact';
import { Fish } from './pages/AllTrails/Fish/fish';
import { Gr } from './pages/AllTrails/Gr/gr';

const App = () => {
  const location = useLocation();
  return (
    <div className="page">
      <Header />
      {location.pathname === '/' ? <MainPage /> : <Outlet />}
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'main-page',
        element: <MainPage />,
      },
      {
        path: 'all-trails',
        element: <AllTrails />,
      },
      {
        path: 'humans-and-nature',
        element: <HumansAndNature />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'fishermans-trail',
        element: <Fish />,
      },
      {
        path: 'gr221',
        element: <Gr />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
