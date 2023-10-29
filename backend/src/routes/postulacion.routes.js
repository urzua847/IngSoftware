"use strict";
const express = require("express");

/** Controlador de postulaciones */
const postulacionController = require("../controllers/postulacion.controller.js");

/** Middlewares de autorización */
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");

/** Middleware de autenticación */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

/** Instancia del enrutador */
const router = express.Router();

// Define el middleware de autenticación para todas las rutas
router.use(authenticationMiddleware);

// Define las rutas para las postulaciones
router.get("/", postulacionController.getPostulaciones);
router.post("/", authorizationMiddleware.isAdmin, postulacionController.createPostulacion);
router.get("/:id", postulacionController.getPostulacionById);
router.put("/:id", authorizationMiddleware.isAdmin, postulacionController.updatePostulacion);
router.delete("/:id", authorizationMiddleware.isAdmin, postulacionController.deletePostulacion);

// Exporta el enrutador
module.exports = router;
