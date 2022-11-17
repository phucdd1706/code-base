// THIRD-PARTY IMPORTS
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// PROJECT IMPORTS
import useAuth from '~/hooks/useAuth';
import { GuardProps } from '~/types';

const AuthGuard = ({ children }: GuardProps) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return children;
};

export default AuthGuard;
