import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Especies from './pages/Especies';

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
    ],
  },
]);

export default router;
