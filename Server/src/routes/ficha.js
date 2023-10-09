const express = require("express");
const fichaSchema = require("../models/ficha");
const router = express.Router();
// create ficha
router.post("/fichas", (req, res) => {
  const ficha = fichaSchema(req.body);
  ficha
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// get all fichas
router.get("/fichas", (req, res) => {
  fichaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// get a ficha
router.get("/fichas/:id", (req, res) => {
  const { id } = req.params;
  fichaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// update a ficha
router.put("/fichas/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  fichaSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// delete a ficha
router.delete("/fichas/:id", (req, res) => {
  const { id } = req.params;
  fichaSchema
    .findByIdAndRemove(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Routesnpm run
module.exports = router;
