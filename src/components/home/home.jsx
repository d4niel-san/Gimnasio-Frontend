import React, { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import SignUp from "../signUp";

const Home = () => {
  const { isUserLogged } = useContext(ApiContext);
  const DashboardWithLogin = () => {
    return (
      <>
        <SignUp />
      </>
    );
  };

  const DashboardWithoutLogin = () => {
    return (
      <>
      </>
    );
  };
  return isUserLogged ? <DashboardWithoutLogin /> : <DashboardWithLogin />;
};

export default Home;
