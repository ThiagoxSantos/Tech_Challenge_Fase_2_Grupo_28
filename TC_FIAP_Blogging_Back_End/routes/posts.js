const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");

// Os seguintes endpoints REST serão implementados para a aplicação de blogging:

// GET /posts - Lista de Posts:
// Este endpoint permitirá aos alunos visualizarem uma lista de todos os posts disponíveis na página principal.
router.get("/", postController.main);

// GET /posts/:id - Leitura de Posts:
// Ao acessar este endpoint com um ID específico de post, os alunos poderão ler o conteúdo completo desse post.
router.get("/:id", postController.single);

// POST /posts - Criação de Postagens:
// Permite que professores criem novas postagens. Este endpoint aceitará dados como título, conteúdo e autor no corpo da requisição.
router.post("/", postController.novo);

// PUT /posts/:id - Edição de Postagens:
// Usado para editar uma postagem existente. Professores deverão fornecer o ID do post que desejam editar e os novos dados no corpo da requisição.
router.put("/:id", postController.atualizar);

// GET /posts/admin - Listagem de Todas as Postagens (Visão Administrativa):
// Este endpoint permitirá que professores vejam todas as postagens criadas, facilitando a gestão do conteúdo.
router.get("/admin", postController.admin);

// DELETE /posts/:id - Exclusão de Postagens:
// Permite que professores excluam uma postagem específica, usando o ID do post como parâmetro.
router.delete("/:id", postController.delete);

// GET /posts/search - Busca de Posts:
// Este endpoint permitirá a busca de posts por palavras-chave. Os usuários poderão passar uma query string com o termo de busca e o sistema retornará uma lista de posts que contêm esse termo no título ou conteúdo.
router.get("/:search", postController.pesquisa);

module.exports = router;
