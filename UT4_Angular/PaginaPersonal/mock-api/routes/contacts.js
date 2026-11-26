const express = require('express');
const router = express.Router();
const contacts = require('../mock-data/contacts.json');


router.get('/', (req, res) => {
  res.json(contacts);
});

router.post('/', (req, res) => {
  const newContact = req.body;

  // Devuelve lo del JSON sin el nuevo contacto.. eso ya lo mejorare //TODO
  res.status(201).json(contacts);
});

module.exports = router;