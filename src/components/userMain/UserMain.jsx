
import { Box, Container, TextField } from '@mui/material';
import NavBar from '../navbar';
import * as styles from './userMainStlyles';
import { ApiContext } from "../../context/apiContext";
import { useContext } from 'react';

const UserMain = () => {

  const { userLogged, isUserLogged } = useContext(ApiContext)

  return(
      <>
      {console.log(userLogged)}
      <NavBar/>
      <Container
      component='main'
      maxWidth='xs'
      sx={styles.Container}
      >Configuracion de Usuario
        <Box
          sx={styles.Box}
        >
          <TextField
          autoComplete='given-name'
          name='firstName'
          id='filled-basic'//firstName'
          label='First Name'
          autoFocus
          />
          <TextField id="filled-basic" label="First Name" variant="filled" />
        </Box>
      
      </Container>
      </>
    );

}

export default UserMain;