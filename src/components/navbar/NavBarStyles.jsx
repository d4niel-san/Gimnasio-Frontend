import { alpha } from "@mui/material";
import { teal } from "@mui/material/colors";

const Container = {
    position: "fixed",
    backgroundColor: alpha(teal[500], 0.4),
    zIndex: 10
}

const Toolbar = { 
    textDecoration: "none", 
    flexGrow: 1, 
    display: "flex" 
}

const Link = {
    textDecoration: "none",
    textTransform: "capitalize",
    display: "block",
  }

export {
    Container, 
    Link,
    Toolbar
};
