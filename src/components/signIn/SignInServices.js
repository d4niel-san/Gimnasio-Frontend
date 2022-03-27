import axios from "axios";

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const logUser = {
      email: data.get("email"),
      password: data.get("password")
    }
  console.log(logUser);
  logUserToBack(logUser);
};

async function logUserToBack(logUser) {
  await axios.post('http://localhost:5000/logUser', logUser)
    .then((response) => {
      console.log(response.data)
      if (!response.data) {
        alert("nombre de usuario o contraseña invalida, por favor intente nuevamente")
      } else {
        alert(`Bienvenido {response.data}`)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

export {
  handleSubmit,
  logUserToBack
};