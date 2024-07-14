const express = require('express');
const router = express.Router();
const Usuario = require('../model/Usuario');

router.get('/', async (req, res) => {
  const listUsers = await Usuario.findAll();
  res.json(listUsers);
});

router.get('/:id', async (req, res) => {
  const user = await Usuario.findByPk(parseInt(req.params.id));
  if (!user) return res.status(404).send('Usuário não encontrado');
  res.json(user);
});

router.post('/', async (req, res) => {
  var user = {
    Nome:  req.body.Nome,
    Email: req.body.Email
  }
  const userInserido = await Usuario.create(user);
  res.status(201).json(userInserido);
});

router.put('/:id', async (req, res) => {
  var user = await Usuario.findByPk(parseInt(req.params.id));
  if (!user) return res.status(404).send('Usuário não encontrado');
 
  user.Nome = req.body.Nome;
  user.Email = req.body.Email;
  
  const userAtt = await user.save();
  res.json(userAtt);
});

router.delete('/:id', async (req, res) => {
  var user = await Usuario.findByPk(parseInt(req.params.id));
  if (!user) return res.status(404).send('Usuário não encontrado');

  const userDelete = await user.destroy();
  res.json(userDelete);
})

module.exports = router;