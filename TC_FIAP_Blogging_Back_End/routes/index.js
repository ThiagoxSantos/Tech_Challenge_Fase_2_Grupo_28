var express = require('express');
var router = express.Router();
const sequelize = require('../database/database');
const Usuario = require('../model/Usuario');
const Registro = require('../model/Registro');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Verifica a conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso.');
        
        // Aqui você pode utilizar o modelo para operações CRUD
        Usuario.findAll().then(users => {
            //console.log(users);
        });
        try {
            const posts = Registro.findAll({
              include: Usuario, // Inclui informações do usuário
            });
            //console.log(JSON.stringify(posts, null, 2));
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });

module.exports = router;