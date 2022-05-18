//#region Imports
import React, { useContext } from 'react';
import { ApiContext } from '../../context/apiContext';
import SignUp from '../signUp';
import UserMain from '../userMain/UserMain';
//#endregion
const Home = () => {
  const { isUserLogged } = useContext(ApiContext);

  const DashboardWithLogin = () => {
    return (
      <>
        <UserMain />
      </>
    );
  };

  const DashboardWithoutLogin = () => {
    return (
      <>
        <SignUp />
      </>
    );
  };
  return isUserLogged ? <DashboardWithLogin /> : <DashboardWithoutLogin />;
};

export default Home;
