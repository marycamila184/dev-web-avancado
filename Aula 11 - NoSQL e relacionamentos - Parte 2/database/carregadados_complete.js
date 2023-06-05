require("./mongodb");
const mongoose = require("mongoose");
const commentModel = require("../models/commentModel");
const movieModel = require("../models/movieModel");
const planModel = require("../models/planModel");
const userModel = require("../models/userModel");
const movies = require("./movies.json");
const comments = require("./comments.json");
const plans = require("./plans.json");
const users = require("./users.json");

async function carregarDados() {
    try {
        await planModel.deleteMany({});
        for (const plan of plans) {
            await planModel.create(plan);
        }
        console.log("Carga de planos concluída!");

        await userModel.deleteMany({});
        for (const user of users) {
            await planModel
                .findOne({ codigo: user.plano })
                .then((plano) => {
                    user.plano = plano._id;
                    return user;
                })
                .then(async (usuarioAlterado) => {
                    await userModel.create(usuarioAlterado);
                });
        }
        console.log("Carga de usuarios concluída!");

        await commentModel.deleteMany({});
        for (const comment of comments) {
            await userModel
                .findOne({ codigo: comment.user })
                .then((user) => {
                    comment.user = user._id;
                    return comment;
                }).then(async (commentAlterado) => {
                    await commentModel.create(commentAlterado);
                });
        }
        console.log("Carga de comentarios concluída!");

        await movieModel.deleteMany({});
        for (const movie of movies) {
            await movieModel.create(movie);
        }
        console.log("Carga de filmes feita!");


    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
}

carregarDados();