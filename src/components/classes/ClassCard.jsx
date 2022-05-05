import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ClassCard = ({
  Name,
  classDescription,
  classStartHour,
  teacherLastName,
  teacherFirstName,
  Number,
  image
}) => {
  return (
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
        <Button size="small">Join</Button>
        <Button size="small">Leave</Button>
      </CardActions>
    </Card>
  );
};

export default ClassCard;
