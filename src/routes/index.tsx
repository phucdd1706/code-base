// THIRD-PARTY IMPORTS
import { useRoutes } from 'react-router-dom';

// PROJECT IMPORTS
import AuthenticationRoutes from '~/routes/AuthenticationRoutes';
import Error from '~/views/pages/maintenance/Error';
import MainRoutes from '~/routes/MainRoutes';

export default function ThemeRoutes() {
  return useRoutes([{ path: '*', element: <Error /> }, AuthenticationRoutes, MainRoutes]);
}
