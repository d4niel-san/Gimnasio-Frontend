import React, { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import backgroundImg from "../../assets/home.jpg";
import SignUp from "../signUp";
import NavBar from "../navbar";

const Home = () => {
  const { isUserLogged } = useContext(ApiContext);

  const DashboardWithLogin = () => {
    return (
      <>
        <NavBar />
        <SignUp />
      </>
    );
  };

  const DashboardWithoutLogin = () => {
    return (
      <>
        <NavBar />
      </>
    );
  };
  return isUserLogged ? <DashboardWithoutLogin /> : <DashboardWithLogin />;
};

export default Home;
