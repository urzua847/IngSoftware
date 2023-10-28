"use strict";

const Joi = require("joi");

/**
 * Esquema de validación para el cuerpo de la solicitud de la ficha social.
 * @constant {Object}
 */
const fichaBodySchema = Joi.object({
    nombre: Joi.string().required().messages({
      "any.required": "El nombre es obligatorio.",
      "string.empty": "El nombre no puede estar vacío.",
      "string.base": "El nombre debe ser de tipo string.",
    }),
    rut: Joi.string().required().min(8).max(8).messages({
      "any.required": "El RUT es obligatorio.",
      "string.empty": "El RUT no puede estar vacío.",
      "number.base": "El RUT debe ser de tipo numérico.",
      "number.min": "El RUT debe der se al menos 8 numeros.",
      "number.max": "El RUT debe der se a lo mas 8 numeros.",
    }),
    fechaNacimiento: Joi.date().required().messages({
      "any.required": "La fecha de nacimiento es obligatoria.",
      "date.base": "La fecha de nacimiento debe ser de tipo fecha.",
    }),
    genero: Joi.string()
      .valid("Masculino", "Femenino", "Otro")
      .required()
      .messages({
        "any.required": "El género es obligatorio.",
        "any.only": "El género proporcionado no es válido.",
      }),
    direccion: Joi.object({
      calle: Joi.string().required().messages({
        "any.required": "La calle es obligatoria.",
        "string.empty": "La calle no puede estar vacía.",
      }),
      numero: Joi.number().required().messages({
        "any.required": "El número es obligatorio.",
        "number.base": "El número debe ser de tipo numérico.",
      }),
      ciudad: Joi.string().required().messages({
        "any.required": "La ciudad es obligatoria.",
        "string.empty": "La ciudad no puede estar vacía.",
      }),
      codigoPostal: Joi.string().required().messages({
        "any.required": "El código postal es obligatorio.",
        "string.empty": "El código postal no puede estar vacío.",
      }),
    }),
    telefono: Joi.string().required().messages({
      "any.required": "El teléfono es obligatorio.",
      "string.empty": "El teléfono no puede estar vacío.",
    }),
    correoElectronico: Joi.string().required().messages({
      "any.required": "El correo electrónico es obligatorio.",
      "string.empty": "El correo electrónico no puede estar vacío.",
    }),
    estadoCivil: Joi.string()
      .valid("Soltero(a)", "Casado(a)", "Divorciado(a)", "Viudo(a)", "Unión libre")
      .required()
      .messages({
        "any.required": "El estado civil es obligatorio.",
        "any.only": "El estado civil proporcionado no es válido.",
      }),
    conyuge: Joi.object({
      nombre: Joi.string(),
      fechaNacimiento: Joi.date(),
      genero: Joi.string(),
    }),
    hijos: Joi.array().items(
      Joi.object({
        nombre: Joi.string(),
        fechaNacimiento: Joi.date(),
        genero: Joi.string(),
      }),
    ),
    ingresos: Joi.object({
      tipo: Joi.string().required(),
      cantidad: Joi.number().required(),
    }),
    gastos: Joi.object({
      tipo: Joi.string(),
      cantidad: Joi.number(),
    }),
    empleo: Joi.object({
      actual: Joi.object({
        empresa: Joi.string(),
        cargo: Joi.string(),
        fechaInicio: Joi.date(),
      }),
      historial: Joi.array().items(
        Joi.object({
          empresa: Joi.string(),
          cargo: Joi.string(),
          fechaInicio: Joi.date(),
          fechaFin: Joi.date(),
        }),
      ),
    }),
    historialMedico: Joi.object({
      alergias: Joi.string(),
      condicionesMedicas: Joi.string(),
      medicamentos: Joi.string(),
      hospitalizaciones: Joi.array().items(
        Joi.object({
          motivo: Joi.string(),
          fecha: Joi.date(),
        }),
      ),
    }),
    situacionFamiliar: Joi.object({
      problemasFamiliares: Joi.string(),
      historialViolencia: Joi.string(),
    }),
    historialEducacion: Joi.array().items(
      Joi.object({
        institucion: Joi.string(),
        nivelEducativo: Joi.string(),
        fechaInicio: Joi.date(),
        fechaFin: Joi.date(),
      }),
    ),
    necesidades: Joi.object({
      vivienda: Joi.string(),
      salud: Joi.string(),
      educacion: Joi.string(),
      otros: Joi.string(),
    }),
    observaciones: Joi.string(),
  });

  /**
 * Esquema de validación para el id de usuario.
 * @constant {Object}
 */
const fichaIdSchema = Joi.object({
    id: Joi.string()
      .required()
      .pattern(/^(?:[0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/)
      .messages({
        "string.empty": "El id no puede estar vacío.",
        "any.required": "El id es obligatorio.",
        "string.base": "El id debe ser de tipo string.",
        "string.pattern.base": "El id proporcionado no es un ObjectId válido.",
      }),
  });

  module.exports = { fichaBodySchema, fichaIdSchema };
