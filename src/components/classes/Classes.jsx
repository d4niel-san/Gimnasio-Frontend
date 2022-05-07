import { Container } from '@mui/material';
import { useContext } from 'react';
import { ApiContext } from '../../context/apiContext';
import NavBar from '../navbar';
import ClassCard from './ClassCard';
import * as styles from './ClassesStlyles';

const Classes = () => {
  const { classes } = useContext(ApiContext);

  const CondRend = () => {
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
      />
    ));
  };

  return (
    <>
      <NavBar />
      <Container component="main" maxWidth="xs" sx={styles.Container}>
        Clases disponibles
        <CondRend />
      </Container>
    </>
  );
};

export default Classes;
