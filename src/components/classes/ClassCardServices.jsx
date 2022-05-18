async function handleJoin(setOpen, setAlertInfo, id, joinClass, updateClases) {
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

async function handleLeave(setOpen, setAlertInfo, id, updateClases, leaveClass) {
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

function userIsJoined(id, setjoined, userLogged) {
  let resoultClase = userLogged.classes.find((element) => element._id === id);
  resoultClase ? setjoined(true) : setjoined(false);
}

export { userIsJoined, handleLeave, handleJoin };
