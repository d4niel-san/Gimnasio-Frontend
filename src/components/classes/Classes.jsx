//#region imports
import { Alert, Container, Snackbar } from '@mui/material';
import { useContext, useState } from 'react';
import { ApiContext } from '../../context/apiContext';
import * as generalStyles from '../generalStyles';
import NavBar from '../navbar';
import ClassCard from './ClassCard';
//#endregion

const Classes = () => {
  const { classes } = useContext(ApiContext);
  const [open, setOpen] = useState(false);
  const [alertInfo, setAlertInfo] = useState('');
  const handleClose = () => setOpen(false);

  const ClassList = () => {
    if (!classes) return null;
    return classes.map((element) => (
      <ClassCard
        key={element._id}
        Name={element.className}
        Number={element.classNumber}
        teacherFirstName={element.teacherFirstName}
        teacherLastName={element.teacherLastName}
        classStartHour={element.classStartHour}
        classDescription={element.classDescription}
        image={element.image}
        id={element._id}
        setOpen={setOpen}
        setAlertInfo={setAlertInfo}
      />
    ));
  };

  return (
    <>
      <NavBar />
      <Container component="main" maxWidth="false" sx={generalStyles.Container}>
        Clases disponibles
        <ClassList />
      </Container>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert severity={alertInfo.severity}>
          <strong>{alertInfo.message}</strong>
        </Alert>
      </Snackbar>
    </>
  );
};
export default Classes;
