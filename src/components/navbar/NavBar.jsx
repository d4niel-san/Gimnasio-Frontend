import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ApiContext } from "../../context/apiContext";
import * as Styles from './NavBarStyles';
import * as services from "./NavBarServices"

const settings = ["profile", "account", "dashboard", "logout"];

const NavBar = () => {
  
  const [anchorElUser, setAnchorElUser] = useState(null);

  //const isUserLogged = true;
  const { isUserLogged } = useContext(ApiContext);
/*
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
*/
  return (
    <AppBar position='static'>
      <Container
        maxWidth='xl'
        sx={Styles.Container}
      >
        <Toolbar disableGutters>
          <Link
            to='/'
            style={Styles.Toolbar}
          >
            <Typography color='secondary' variant='h6' noWrap component='div'>
              LEGION GYM
            </Typography>
          </Link>

          {isUserLogged ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={services.handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='https://i.pravatar.cc/100' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={services.handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={services.handleCloseUserMenu}>
                    <Link
                      to={`/${setting}`}
                      textAlign='center'
                      color='primary'
                      style={Styles.Link}
                    >
                      <Typography color='primary'>{setting}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Link to='signIn' style={{ textDecoration: "none" }}>
              <Button color='primary' size='small' variant='contained'>
                Sign In
              </Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
