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
import Planning from './pages/Planning';
import ResultToFish from './pages/ResultToFish';


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
        element: <PrivateRoute />,//Rutas Privadas
        children: [
          {
            path: 'logbook',
            element: <Logbook />
          },
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'planning',
            element: <Planning/>
          },
          {
            path: 'result-to-fish',
            element: <ResultToFish/>
          }
        ]
      },
      {
        element: <PublicRoute />, // Rutas Pública
        children: [
          {
            path:'home',
            element:<Home/>
          },
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