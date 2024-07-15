const Post = require("../model/Post");
const { Op } = require("sequelize");

module.exports = class postController {
  //Rota para pegar todos os posts
  static async main(req, res) {
    const listPosts = await Post.findAll();
    res.json(listPosts);
  }

  //Rota para pegar um post em especifico
  static async single(req, res) {
    const post = await Post.findByPk(parseInt(req.params.id));
    if (!post) return res.status(404).send("Post não encontrado.");
    res.json(post);
  }

  //Rota para criar novo post
  static async novo(req, res) {
    const dados = req.body;

    const data = new Date();
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    if (!dados.titulo || !dados.descricao || !dados.conteudo || !dados.imagem) {
      res.json("Post não criado! Faltam dados.");
    } else {
      const novo = {
        titulo: dados.titulo,
        descricao: dados.descricao,
        conteudo: dados.conteudo,
        imagem: dados.imagem,
        datapostagem: `${ano}-${mes}-${dia}`,
      };

      await Post.create(novo);

      res.json("Post Criado com Sucesso!");
    }
  }

  //Rota para atualizar post
  static async atualizar(req, res) {
    const dados = req.body;
    const id = req.params.id;

    const data = new Date();
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    const update = {
      titulo: dados.titulo,
      descricao: dados.descricao,
      conteudo: dados.conteudo,
      imagem: dados.imagem,
      dataatualizacao: `${ano}-${mes}-${dia}`,
    };

    await Post.update(update, { where: { id: id } });

    res.json("Post Atualizado com sucesso!");
  }

  //Rota para pegar todos os posts (Admin)
  static async admin(req, res) {
    const listPosts = await Post.findAll();
    res.json(listPosts);
  }

  //Rota para excluir post
  static async delete(req, res) {
    const id = req.params.id;
    await Post.destroy({ where: { id: id } });
    res.json("Post Deletado com Sucesso!");
  }

  //Rota para pesquisa
  static async pesquisa(req, res) {
    const pesquisa = req.params.search;

    const posts = await Post.findAll({
      where: {
        [Op.or]: [
          {
            titulo: {
              [Op.like]: `%${pesquisa}%`,
            },
          },
          {
            conteudo: {
              [Op.like]: `%${pesquisa}%`,
            },
          },
        ],
      },
    });

    res.json(posts);
  }
};
