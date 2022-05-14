import { Alert, AlertTitle } from '@mui/material';

function apiAlert(id, text) {
  switch (id) {
    case 1:
      console.log(text);
      <Alert severity="error">This is an error alert — check it out!</Alert>;
      return (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong>{text}</strong>
        </Alert>
      );
    case 2:
      return (
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          <strong>{text}</strong>
        </Alert>
      );
    case 3:
      return (
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          <strong>{text}</strong>
        </Alert>
      );
    case 4:
      console.log(text);
      return (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          <strong>{text}</strong>
        </Alert>
      );
    default:
      return <></>;
  }
}

export default apiAlert;
