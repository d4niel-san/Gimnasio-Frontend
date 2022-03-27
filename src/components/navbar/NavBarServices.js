//import { useState } from "react";
import NavBar from "./NavBar";

//const [anchorElUser, setAnchorElUser] = useState(null);

const handleOpenUserMenu = (event) => {
    NavBar.setAnchorElUser(event.currentTarget);
};

const handleCloseUserMenu = () => {
    NavBar.setAnchorElUser(null);
};


export {
    handleOpenUserMenu,
    handleCloseUserMenu,
    //anchorElUser
}