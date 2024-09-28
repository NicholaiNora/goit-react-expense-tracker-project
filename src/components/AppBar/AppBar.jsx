import { useAuth } from '../../hooks/useAuth';
import SharedLayoutAuth from '../SharedLayout - Auth/SharedLayoutAuth';
import SharedLayout from '../SharedLayout - Non-Auth/SharedLayout';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
      <>
          {isLoggedIn ? <SharedLayoutAuth /> : <SharedLayout />}
    </>
  );
};