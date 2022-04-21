

const Container = { 
  backgroundColor: "third.main" 
}
  

const Box = {
  marginTop: 1,
  marginLeft: 1.25,
  marginRight: 1.25,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

}
const Box2 = {
  marginTop: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  '& .MuiTextField-root': { m: 1, width: '20ch' },
}

export {
  Container,
  Box,
  Box2
};
