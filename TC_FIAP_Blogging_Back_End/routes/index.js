var express = require("express");
var router = express.Router();
const sequelize = require("../database/database");
const indexController = require("../controller/indexController");
const Post = require('../model/Post');

/* GET home page. */
router.get("/", indexController.main);

// Verifica a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão estabelecida com sucesso.");

    // Aqui você pode utilizar o modelo para operações CRUD
    Post.findAll().then((posts) => {
      //console.log(posts);
    });
  })
  .catch((err) => {
    console.error("Não foi possível conectar ao banco de dados:", err);
  });

module.exports = router;
