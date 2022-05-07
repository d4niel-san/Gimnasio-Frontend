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
  image
}) => {
  const { joinClass } = React.useContext(ApiContext);

  const handleJoin = () => {
    console.log(id);
    joinClass(id);
  };

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
          <Button size="small" onClick={handleJoin}>
            Join
          </Button>
          <Button size="small">Leave</Button>
        </CardActions>
      </Card>
      <br />
    </>
  );
};

export default ClassCard;
