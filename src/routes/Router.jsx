import { AuthLayout } from '../layouts';
import { Landing, Login, NotFound, Register } from '../pages/public';
import { useRoutes } from 'react-router-dom';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
}
