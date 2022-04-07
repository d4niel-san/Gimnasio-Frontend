import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ApiContext = React.createContext(0);
export const Context = ({ children }) => {

  const [isUserLogged, setIsUserLogged] = useState(false);
  let navigate = useNavigate();

  const SignInSubmit = (event) => {
    console.log("entre");
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const logUser = {
      email: data.get("email"),
      password: data.get("password")
    }
    logUserToBack(logUser);
  };

  const logUserToBack = async (logUser) => {
    await axios.post('http://localhost:5000/logUser', logUser)
      .then((response) => {
        if (!response.data) {
          alert("nombre de usuario o contraseña invalida, por favor intente nuevamente")
        } else {
          alert("Bienvenido " + response.data)
          setIsUserLogged(true)
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const SignUpSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      suscribed: data.has("allowExtraEmails")
    }
    newUserToBack(newUser);
  };

  async function newUserToBack(newUser) {
    await axios.post('http://localhost:5000/newUser', newUser)
      .then((response) => {
        alert("Bienvenido " + newUser.firstName)
        setIsUserLogged(true)
        navigate("/", { replace: true })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <ApiContext.Provider
      value={{
        isUserLogged,
        setIsUserLogged,
        SignInSubmit,
        SignUpSubmit,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};


/*  useEffect(() => {
    console.log("Cambie userlogged", isUserLogged)
  }, [isUserLogged])*/