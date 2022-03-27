import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import { ApiContext, Context } from "./context/apiContext";
import generalTheme from "./themes/generalTheme";
import SignIn from "./components/signIn";
import "./App.css";
import { Box, Button, CssBaseline } from "@mui/material";
import backgroundImg from "./assets/home.jpg";

const App = () => {
  return (
    <BrowserRouter>
      <Context>
        <ThemeProvider theme={generalTheme}>
          <CssBaseline />
          <Box
            sx={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
            <Routes>
              <Route path='/signIn' element={<SignIn />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </Context>   
    </BrowserRouter>

  );
};

export default App;
