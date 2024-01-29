import { Landing } from '../pages/public';
import { useRoutes } from 'react-router-dom';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Landing />,
    },
  ]);
}
