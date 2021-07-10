const postsJson = require("../models/posts.json");

const getAll = (req, res) => {
    res.status(200).send(postsJson);

};


const getById = (req, res)=>{
    const requestId = req.params.id;
    const filteredPost = postsJson.find(post => post.id == requestId);

    res.status(200).send(filteredPost);
};

const createPost = (req, res)=>{
    let requestedTitle = req.body.titulo
    let requestedContent = req.body.conteudo
    let requestedLabels = req.body.etiquetas

    let newPost = {
        "id":Math.random().toString(32).substr(2,6),
        "dataCriacao": new Date(),
        "titulo": requestedTitle,
        "conteudo": requestedContent,
        "etiquetas": requestedLabels
    };
    postsJson.push(newPost);

    res.status(201).send({
        "mensagem": "Post criado com sucesso", newPost
    });
}

    const replacePost = (req, res) =>{
        let requestedId = req.params.id;
        let postFromBody = req.body;
        let filteredPost = postsJson.find(post => post.id == requestedId
            );
            console.log('POST FILTRADO', filteredPost)

            let updatePost = {
                "id": filteredPost.id,
                "dataCriacao": filteredPost.dataCriacao,
                "titulo": postFromBody.titulo,
                "conteudo": postFromBody.conteudo,
                "etiquetas": postFromBody.etiquetas
            }

            console.log("POST ATUALIZADO", updatePost);

            const indice = postsJson.indexOf(filteredPost);

            postsJson.splice(indice, 1, updatePost);
            res.status(200).send({
                "mensagem":"Post substituido com sucesso",
                updatePost
            })
    }

    const updateTitle = (req, res) =>{

        let requestedId = req.params.id;
        let newTitle = req.body.titulo;
        console.log("New Title", newTitle)
        console.log("id", requestId)

        let filteredPost = postsJson.find(post => post.id == requestId);
        console.log("Post Filtrado", filteredPost)

        filteredPost.titulo = newTitle;
        console.log("Pós Alteração de titulo", filteredPost)

        res.status(200).send({
            "mesagem":"Titulo atualizado com sucesso",
            filteredPost
        })
    }


module.exports = {getAll, getById, createPost, replacePost, updateTitle}