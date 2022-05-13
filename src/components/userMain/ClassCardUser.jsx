import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const BasicCard = ({ Name, classStartHour, teacherLastName, teacherFirstName }) => {
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
          <Button size="small">Abandonar</Button>
        </CardActions>
      </Card>
      <br />
    </>
  );
};

export default BasicCard;
