// PROJECT IMPORTS
import GuestGuard from '~/utils/route-guard/GuestGuard';
import MinimalLayout from '~/layout/MinimalLayout';
import NavMotion from '~/layout/NavMotion';

const AuthenticationRoutes = {
  path: '/',
  element: (
    <NavMotion>
      <GuestGuard>
        <MinimalLayout />
      </GuestGuard>
    </NavMotion>
  )
};

export default AuthenticationRoutes;
