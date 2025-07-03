import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Home from './pages/Home';
import Especies from './pages/Especies';
import Logbook from './pages/LogBook';
import Login from './pages/LogIn';
import Register from './pages/Register';
import Profile from './pages/profile';


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
        element: <PrivateRoute />, // ✅ Rutas protegidas
        children: [
          {
            path: 'logbook',
            element: <Logbook />
          },
          {
            path: 'profile',
            element: <Profile />
          }
        ]
      },
      {
        element: <PublicRoute />, // ✅ Rutas solo para no logueados
        children: [
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'register',
            element: <Register />
          }
        ]
      }
    ]
  }
]);

export default router;