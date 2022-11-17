// PROJECT IMPORTS
import AuthGuard from '~/utils/route-guard/AuthGuard';
import MainLayout from '~/layout/MainLayout';

const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  )
};

export default MainRoutes;
