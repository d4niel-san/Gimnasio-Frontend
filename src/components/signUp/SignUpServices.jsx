
import axios from "axios";

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
        suscribed: data.has("allowExtraEmails")
    }    
    newUserToBack(newUser);
};
  
async function newUserToBack(newUser){
    await axios.post('http://localhost:5000/newUser', newUser)
      .catch((error)=> {
          console.log(error);
      })
}

    
export {
    handleSubmit, 
    newUserToBack
};