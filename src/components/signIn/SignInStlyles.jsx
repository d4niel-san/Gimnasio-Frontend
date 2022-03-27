import backImg from "../../assets/signIn.jpg";


const Grid = {
    backgroundImage: `url(${backImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
  }

const Box = {
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
}

const LinkRouter = {
    my: 8,
    mx: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
  }
  
export {
    Grid,
    Box, 
    LinkRouter
};
