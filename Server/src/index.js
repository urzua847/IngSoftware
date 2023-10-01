//Codigo Del Servidor
//Importar Express y mongoose para el servidor y la BD
const express = require('express');
const mongoose = require('mongoose');
//Importar dotenv para las variables de entorno definidas por mi
require('dotenv').config();


//importar app y port
const app = express();
const port = process.env.PORT || 9000;

//middleware (se usa para consultas y guardar informacion en la BD antes de pasar a las consultas)
app.use(express.json());
//middleware Cors


//Mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('DB Connected'))
.catch((error) => console.error('DB Connection Error'));

//usar app.listen para que el servidor escuche
//Listen on port
app.listen(port, () => console.log('server Listening on port', port));


