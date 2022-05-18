//#region imports
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { ApiContext } from '../../context/apiContext';
//#endregion
const ClassCardUser = ({
  Name,
  classStartHour,
  teacherLastName,
  teacherFirstName,
  id,
  setOpen,
  setAlertInfo
}) => {
  const { leaveClass, updateClases } = React.useContext(ApiContext);

  async function handleLeave() {
    const response = await leaveClass(id);
    if (response) {
      updateClases();
      setAlertInfo({
        message: 'Se ha eliminado correctamente de la clase',
        severity: 'success'
      });
      setOpen(true);
    } else {
      setAlertInfo({
        message: 'No se encontraba registrado en esa clase',
        severity: 'error'
      });
      setOpen(true);
    }
  }

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {Name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {teacherLastName}, {teacherFirstName}
          </Typography>
          <Typography variant="body2">{classStartHour}:00 hs</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleLeave}>
            Abandonar
          </Button>
        </CardActions>
      </Card>
      <br />
    </>
  );
};

export default ClassCardUser;
