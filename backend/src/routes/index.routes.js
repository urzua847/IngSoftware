"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

/** Enrutador de usuarios  */
const userRoutes = require("./user.routes.js");
const fichasRoutes = require("./ficha.routes.js");


/** Enrutador de autenticación */
const authRoutes = require("./auth.routes.js");

/** Middleware de autenticación */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

/** Instancia del enrutador */
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use("/users", authenticationMiddleware, userRoutes);
// Define las rutas para la autenticación /api/auth
router.use("/auth", authRoutes);
// Define las rutas para la autenticación /api/fichasSociales
router.use("/fichas", fichasRoutes);


// Exporta el enrutador
module.exports = router;
