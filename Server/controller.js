const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/src"))
const User = require('./Models/userfiltered')

//#region  Conexion a Base de Datos

const mongoose = require('mongoose');

const user = 'admintest';
const password = 'boxadmin';
const dbname = 'LegionGym';
const uri = `mongodb+srv://${user}:${password}@legiongym.hmfoq.mongodb.net/${dbname}?retryWrites=true&w=majority`;


mongoose.connect(uri)
    .then(() => console.log('Base de datos conectada: ', dbname))
    .catch(e => console.log(e))

//#endregion

app.get('/', async (req, res) => {
    try {
        const arrayUsersDB = await User.find({name: "Brian"})
        console.log(arrayUsersDB[0].name)
    } catch (error) {
        console.log(error)
    }

})

app.get('/', (req, res) => {
    res.send('Server escuchando en /')
})



app.listen(port, () => {
    console.log('Server escuchando en el puerto')
})