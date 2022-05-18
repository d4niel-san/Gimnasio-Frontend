//#region imports
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Snackbar,
  TextField
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import * as generalStyles from '../generalStyles';
import ClassCardUser from './ClassCardUser';
import * as styles from './userMainStlyles';
//#endregion
const UserMain = () => {
  const { userLogged, updateClases } = useContext(ApiContext);
  const [open, setOpen] = useState(false);
  const [alertInfo, setAlertInfo] = useState('');
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = useState(userLogged?.suscribed);

  useEffect(() => {
    updateClases();
  }, []);

  const handleChange = () => {
    setChecked(!checked);
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
        id={element._id}
        setOpen={setOpen}
        setAlertInfo={setAlertInfo}
      />
    ));
  };

  return (
    <>
      <Container component="main" maxWidth="false" sx={generalStyles.Container}>
        Configuracion de Usuario
        <Box sx={styles.Box2}>
          <div style={{ display: 'flex', width: '100%' }}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              id="outlined-multiline-flexible"
              label="First Name"
              value={userLogged.firstName}
              autoFocus
              disabled
              style={{ flex: 1 }}
            />
            <TextField
              autoComplete="given-name"
              name="lastName"
              id="outlined-multiline"
              label="Last Name"
              value={userLogged.lastName}
              autoFocus
              disabled
              style={{ flex: 1 }}
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
        <ClassList />
        <Link
          to="/classes"
          style={{ textDecoration: 'none', marginBottom: '15px', display: 'inline-block' }}>
          <Button color="primary" size="small" variant="contained">
            Listado de Clases
          </Button>
        </Link>
      </Container>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert severity={alertInfo.severity}>
          <strong>{alertInfo.message}</strong>
        </Alert>
      </Snackbar>
    </>
  );
};
export default UserMain;
