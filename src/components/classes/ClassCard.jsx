//#region imports
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../context/apiContext';
import * as ClassCardServices from './ClassCardServices';
//#endregion

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
  const { joinClass, leaveClass, userLogged, updateClases } = useContext(ApiContext);
  const [joined, setjoined] = useState(false);

  async function handleJoin() {
    ClassCardServices.handleJoin(setOpen, setAlertInfo, id, joinClass, updateClases);
  }
  async function handleLeave() {
    ClassCardServices.handleLeave(setOpen, setAlertInfo, id, updateClases, leaveClass);
  }

  useEffect(() => {
    ClassCardServices.userIsJoined(id, setjoined, userLogged);
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
