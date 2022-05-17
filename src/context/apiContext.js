import { Logout } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';
export const ApiContext = React.createContext(0);

export const Context = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userLogged, setUserLogged] = useState();
  const [classes, setClasses] = useState();
  const [showNavBar, setShowNavBar] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    getClasses();
  }, []);

  useEffect(() => {
    if (userLogged !== undefined) {
      /*if (!isUserLogged) {
        alert('Bienvenido ' + userLogged.firstName);
      }*/
      setIsUserLogged(true);
    }
  }, [userLogged]);

  const logUserToBack = async (logUser) => {
    await api
      .post('/loguser', logUser)
      .then((response) => {
        if (!response.data) {
          alert('nombre de usuario o contraseña invalida, por favor intente nuevamente');
        } else {
          setUserLogged(response.data);
          navigate('/userMain', { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SignInSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const logUser = {
      email: data.get('email'),
      password: data.get('password')
    };
    logUserToBack(logUser);
  };

  const SignUpSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      suscribed: data.has('allowExtraEmails')
    };
    newUserToBack(newUser);
  };

  async function newUserToBack(newUser) {
    await api
      .post('/newUser', newUser)
      .then((response) => {
        setIsUserLogged(true);
        const logUser = {
          email: newUser.email,
          password: newUser.password
        };
        logUserToBack(logUser);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function getClasses() {
    await api.get('/classes').then((response) => {
      setClasses(response.data);
    });
  }

  async function updateClases() {
    await api.post('/getUser', userLogged).then((response) => {
      setUserLogged({
        ...userLogged,
        classes: response.data
      });
    });
  }

  async function joinClass(idClase) {
    const data = { idClase, userLogged };
    let apiResponse;
    await api.post('/joinClass', data).then((response) => (apiResponse = response.data));
    return apiResponse;
  }

  async function leaveClass(idClase) {
    const data = { idClase, userLogged };
    let apiResponse;
    await api.post('/leaveClass', data).then((response) => (apiResponse = response.data));
    return apiResponse;
  }

  return (
    <ApiContext.Provider
      value={{
        isUserLogged,
        setIsUserLogged,
        userLogged,
        setUserLogged,
        SignInSubmit,
        SignUpSubmit,
        showNavBar,
        setShowNavBar,
        classes,
        joinClass,
        leaveClass,
        updateClases
      }}>
      {children}
    </ApiContext.Provider>
  );
};
