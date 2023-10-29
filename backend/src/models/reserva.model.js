const mongoose = require("mongoose");

const reservaSchema = mongoose.Schema({
  fichaSocial: {
    type: String,
    required: true,
  },
  fechaCita: {
    type: Date,
    required: true,
  },
  horaCita: {
    type: String, // Puedes usar un formato específico para las horas
    required: true,
  },
  propositoCita: {
    type: String,
    required: true,
  },
  // Otros campos relacionados con la reserva de citas
  // Puedes agregar más campos según tus necesidades
},
{
  versionKey: false,
});

const Reserva = mongoose.model("Reserva", reservaSchema);

module.exports = Reserva;
