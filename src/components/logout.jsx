import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { ApiContext } from '../context/apiContext';

export const LogOut = () => {
  const { setUserLogged, setIsUserLogged } = useContext(ApiContext);

  useEffect(() => {
    setIsUserLogged(false);
    setUserLogged(undefined);
  }, []);

  return <Navigate to="/" replace={true} />;
};
