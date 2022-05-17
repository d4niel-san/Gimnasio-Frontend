import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { ApiContext } from '../../context/apiContext';

const ClassCard = ({
  id,
  Name,
  classDescription,
  classStartHour,
  teacherLastName,
  teacherFirstName,
  Number,
  image,
  setOpen,
  setAlertInfo
}) => {
  const { joinClass, userLogged, updateClases } = React.useContext(ApiContext);

  async function handleJoin() {
    const response = await joinClass(id);
    if (response) {
      setAlertInfo({
        message: 'Se ha registrado correctamente a la clase',
        severity: 'success'
      });
      updateClases();
    } else {
      setAlertInfo({
        message: 'Ya se encontraba registrado en esa clase',
        severity: 'error'
      });
    }
    setOpen(true);
  }

  const { leaveClass } = React.useContext(ApiContext);

  async function handleLeave() {
    const response = await leaveClass(id);
    if (response) {
      setAlertInfo({
        message: 'Se ha eliminado correctamente de la clase',
        severity: 'success'
      });
      updateClases();
    } else {
      setAlertInfo({
        message: 'No se encontraba registrado en esa clase',
        severity: 'error'
      });
    }
    setOpen(true);
  }

  const [joined, setjoined] = React.useState(false);

  function userIsJoined() {
    let resoultClase = userLogged.classes.find((element) => element._id === id);
    resoultClase ? setjoined(true) : setjoined(false);
  }

  React.useEffect(() => {
    userIsJoined();
  }, [userLogged.classes.length]);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={image} alt="Missing Image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Number}. {Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>
              <u>Profesor/a:</u>
            </b>{' '}
            {teacherFirstName} {teacherLastName} <br />
            <b>
              <u>Descripcion:</u>
            </b>{' '}
            {classDescription} <br />
            <b>
              <u>Horario:</u>
            </b>{' '}
            {classStartHour} Horas
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleJoin} disabled={joined}>
            Join
          </Button>
          <Button size="small" onClick={handleLeave} disabled={!joined}>
            Leave
          </Button>
        </CardActions>
      </Card>
      <br />
    </>
  );
};

export default ClassCard;
