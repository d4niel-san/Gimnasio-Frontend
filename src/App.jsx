import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline } from '@mui/material';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import backgroundImg from './assets/home.jpg';
import Classes from './components/classes/Classes';
import Home from './components/home';
import { LogOut } from './components/logout';
import NavBar from './components/navbar';
import SignIn from './components/signIn';
import UserMain from './components/userMain/UserMain';
import { ApiContext } from './context/apiContext';
import generalTheme from './themes/generalTheme';

const App = () => {
  const { showNavBar, isUserLogged } = useContext(ApiContext);

  function userLogged(mainComponent) {
    if (isUserLogged) return mainComponent;
    return <Home />;
  }

  return (
    <ThemeProvider theme={generalTheme}>
      <CssBaseline />
      <Box sx={BoxStyle}>
        {showNavBar && <NavBar />}
        <Routes>
          <Route path="/logout" element={<LogOut />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/Profile" element={userLogged(<UserMain />)} />
          <Route path="/userMain" element={userLogged(<UserMain />)} />
          <Route path="/classes" element={userLogged(<Classes />)} />
          <Route path="/clases" element={userLogged(<Classes />)} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

const BoxStyle = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

export default App;
