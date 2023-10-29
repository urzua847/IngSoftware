'use strict';

const express = require('express');
const router = express.Router();
const agendamientosController = require('../controllers/agendamientoController');

const authorizationMiddleware = require('../middlewares/authorization.middleware');
const authenticationMiddleware = require('../middlewares/authentication.middleware');

// Define el middleware de autenticación para todas las rutas
router.use(authenticationMiddleware);

// Rutas para los agendamientos
router.get('/', agendamientosController.getAllAgendamientos);
router.post('/', authorizationMiddleware.isAdmin, agendamientosController.createAgendamiento);
router.get('/:id', agendamientosController.getAgendamientoById);
router.put('/:id', authorizationMiddleware.isAdmin, agendamientosController.updateAgendamiento);
router.delete('/:id', authorizationMiddleware.isAdmin, agendamientosController.deleteAgendamiento);

module.exports = router;