const Joi = require("joi");

// Definir el esquema de validación para la reserva
const reservaSchema = Joi.object({
  fichaSocial: Joi.string().required()
  ,
  fechaCita: Joi.date().iso().required(),
  horaCita: Joi.string().required(),
  propositoCita: Joi.string().required(),

  // Puedes agregar validaciones para otros campos aquí si es necesario
});

module.exports = reservaSchema;
