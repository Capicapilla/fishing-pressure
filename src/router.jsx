import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Especies from './pages/Especies';
import Logbook from './pages/LogBook';
import Login from './pages/LogIn';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'especies',
        element: <Especies />,
      },
      {
        path: 'logbook',
        element:<Logbook />
      },
      {
        path: 'login',
        element:<Login/>
      },
      {
        path: 'register',
        element: <Register/>
      }
    ],
  },
]);

export default router;
