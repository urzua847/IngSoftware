const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Importar rutas
const fichaRoutes = require('./routes/ficha');

app.use(express.json());

//middleware de montaje de rutas (se utilizan para definir las rutas)
app.use("/api", fichaRoutes);

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('DB Connected'))
.catch((error) => console.error('DB Connection Error'));


app.listen(3000, () =>  console.log('Server is running on port', port));