const express = require('express');
const router = express.Router();
const Post = require('../model/Post');



// Os seguintes endpoints REST serão implementados para a aplicação de blogging:

// GET /posts - Lista de Posts:
// Este endpoint permitirá aos alunos visualizarem uma lista de todos os posts disponíveis na página principal.
router.get('/', async (req, res) => {
    const listPosts = await Post.findAll();
    res.json(listPosts);
  });

// GET /posts/:id - Leitura de Posts:
// Ao acessar este endpoint com um ID específico de post, os alunos poderão ler o conteúdo completo desse post.
router.get('/:id', async (req, res) => {
  const post = await Post.findByPk(parseInt(req.params.id));
  if (!post) return res.status(404).send('Post não encontrado.');
  res.json(post);
});

// POST /posts - Criação de Postagens:
// Permite que professores criem novas postagens. Este endpoint aceitará dados como título, conteúdo e autor no corpo da requisição.


// PUT /posts/:id - Edição de Postagens:
// Usado para editar uma postagem existente. Professores deverão fornecer o ID do post que desejam editar e os novos dados no corpo da requisição.


// GET /posts/admin - Listagem de Todas as Postagens (Visão Administrativa):
// Este endpoint permitirá que professores vejam todas as postagens criadas, facilitando a gestão do conteúdo.


// DELETE /posts/:id - Exclusão de Postagens:
// Permite que professores excluam uma postagem específica, usando o ID do post como parâmetro.


// GET /posts/search - Busca de Posts:
// Este endpoint permitirá a busca de posts por palavras-chave. Os usuários poderão passar uma query string com o termo de busca e o sistema retornará uma lista de posts que contêm esse termo no título ou conteúdo.


module.exports = router;