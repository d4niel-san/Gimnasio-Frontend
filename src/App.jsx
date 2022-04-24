import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import backgroundImg from "./assets/home.jpg";
import Home from "./components/home";
import NavBar from "./components/navbar";
import SignIn from "./components/signIn";
import UserMain from "./components/userMain/UserMain";
import { ApiContext } from "./context/apiContext";
import generalTheme from "./themes/generalTheme";

const App = () => {
  const {showNavBar} = useContext(ApiContext)
  console.log('showNavBar',showNavBar)

  return (
    
      
        <ThemeProvider theme={generalTheme}>
          <CssBaseline />
          <Box
            sx={BoxStyle}
          >
            {showNavBar && <NavBar />}
            <Routes>
              <Route path='/signIn' element={<SignIn />} />
              <Route path='/userMain' element={<UserMain/>} />
              <Route path='/' element={<Home />} />
            </Routes>
          </Box>
        </ThemeProvider>
      
    

  );
};

const BoxStyle ={
  backgroundImage: `url(${backgroundImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
}


export default App;
