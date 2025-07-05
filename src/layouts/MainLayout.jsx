import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  const location = useLocation();

  // Si estamos en login o en el registro NO SE PONEN MÁRGENES
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      <Navbar />
      <main className={isAuthPage ? 'p-0 m-0 w-100' : 'container py-4'}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
