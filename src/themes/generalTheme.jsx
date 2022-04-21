import { createTheme } from "@mui/material/styles";
import { blue, grey, teal } from "@mui/material/colors";
import { alpha } from "@mui/material";

const generalTheme = createTheme({
  palette: {
    primary: {
      main: teal[600],
      contrastText: grey[100],
    },
    secondary: {
      main: grey[100],
      contrastText: grey[900],
    },
    info: {
      main: alpha(blue[500], 0.9),
    },
    third: {
      main: alpha(grey[100], 0.9),
    },
    // information: {
    //   main: alpha(blue[100], 0.8),
    // },
    text: {
      primary: grey[800],
    },
  },
});

export default generalTheme;
