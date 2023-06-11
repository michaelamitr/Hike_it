import React, { useEffect } from 'react';
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
import { Trail } from './pages/AllTrails/Trail/trail';
import { ErrorPage } from './components/ErrorPage/error';

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'hlavni-strana',
        element: <MainPage />,
      },
      {
        path: 'vsechny-trasy',
        element: <AllTrails />,
      },
      {
        path: 'lide-a-priroda',
        element: <HumansAndNature />,
      },
      {
        path: 'kontakty',
        element: <Contacts />,
      },
      {
        path: 'vsechny-trasy/:trailId',
        element: <Trail />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
