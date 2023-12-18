'use strict';

const express = require('express');
const router = express.Router();
const agendamientosController = require('../controllers/agendamientoController');

const authorizationMiddleware = require('../middlewares/authorization.middleware');
const authenticationMiddleware = require('../middlewares/authentication.middleware');

// Define el middleware de autenticación para todas las rutas
router.use(authenticationMiddleware);

// Rutas para los agendamientos
router.get('/agendamientos', authorizationMiddleware.isAdmin, agendamientosController.getAllAgendamientos);
router.post('/agendamientos', authorizationMiddleware.isAdmin, agendamientosController.createAgendamiento);
router.get('/agendamientos/:id', agendamientosController.getAgendamientoById);
router.put('/agendamientos/:id', authorizationMiddleware.isAdmin, agendamientosController.updateAgendamiento);
router.delete('/agendamientos/:id', authorizationMiddleware.isAdmin, agendamientosController.deleteAgendamiento);

module.exports = router;