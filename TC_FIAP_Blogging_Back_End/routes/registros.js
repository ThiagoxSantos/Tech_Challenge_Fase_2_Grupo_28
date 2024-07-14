const express = require('express');
const router = express.Router();
//const Usuario = require('../model/Usuario');
const Registro = require('../model/Registro');
const { subHours } = require('date-fns');

router.get('/', async (req, res) => {
    const listRecords = await Registro.findAll();
    if (!listRecords) return res.status(404).send('Registros não encontrados');
    res.json(listRecords);
});

router.get('/:idUsuario', async (req, res) => {
    const record = await Registro.findAll({
        where: { idUsuario: parseInt(req.params.idUsuario) }
    });
    if (record.length === 0) return res.status(404).send('Registros não encontrados');
    res.json(record);
});

router.post('/', async (req, res) => {
    var record = {
        idUsuario: req.body.idUsuario,
        DataInicio: subHours(req.body.DataInicio, 3),
        DataFim: subHours(req.body.DataFim, 3)
    }
    const recordInserido = await Registro.create(record);
    res.status(201).json(recordInserido);
});

// Nao havera update de registros

router.delete('/:id', async (req, res) => {
    var record = await Registro.findByPk(parseInt(req.params.id));
    if (!record) return res.status(404).send('Registros não encontrados');

    const recordDelete = await record.destroy({
        where: {id: record.id}
    });
    res.json(recordDelete);
})

module.exports = router;