import { Box, Button, Checkbox, Container, FormControlLabel, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import ClassCardUser from './ClassCardUser';
import * as styles from './userMainStlyles';

const UserMain = () => {
  const { userLogged } = useContext(ApiContext);

  const [checked, setChecked] = useState(userLogged.suscribed);

  const handleChange = () => {
    setChecked(!checked);
  };

  const earlyReturn = () => {
    if (!userLogged) {
      Navigate('/', { replace: true });
    }
  };

  const ClassList = () => {
    if (!userLogged.classes) return null;
    return userLogged.classes.map((element) => (
      <ClassCardUser
        key={element._id}
        Name={element.className}
        teacherFirstName={element.teacherFirstName}
        teacherLastName={element.teacherLastName}
        classStartHour={element.classStartHour}
      />
    ));
  };

  return (
    <>
      {earlyReturn()}
      <Container component="main" maxWidth="xs" sx={styles.Container}>
        Configuracion de Usuario
        <Box sx={styles.Box2}>
          <div>
            <TextField
              autoComplete="given-name"
              name="firstName"
              id="outlined-multiline-flexible"
              label="First Name"
              value={userLogged.firstName}
              autoFocus
              disabled
            />
            <TextField
              autoComplete="given-name"
              name="lastName"
              id="outlined-multiline"
              label="Last Name"
              value={userLogged.lastName}
              autoFocus
              disabled
            />
          </div>
        </Box>
        <Box sx={styles.Box}>
          <TextField
            autoComplete="given-name"
            name="email"
            id="filled-basic"
            label="E-Mail"
            value={userLogged.email}
            autoFocus
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                name="suscribed"
                color="primary"
                checked={checked}
                onChange={handleChange}
              />
            }
            label="Suscribed to inspiration, marketing promotions and updates via email."
          />
        </Box>
        <br />
        {
          //ClassList(userLogged.classes)
        }
        <ClassList />
        <Link to="/classes" style={{ textDecoration: 'none' }}>
          <Button color="primary" size="small" variant="contained">
            Listado de Clases
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default UserMain;
