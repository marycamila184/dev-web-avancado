require("./mongodb");
const mongoose = require("mongoose");
const movieModel = require("../models/movieModel");
const planModel = require("../models/planModel");
const userModel = require("../models/userModel");
const movies = require("./movies.json");
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
        for (const usuario of usuarios) {
            await planModel
                .findOne({ codigo: usuario.plano })
                .then((plano) => {
                    usuario.plano = plano._id;
                    return usuario;
                })
                .then(async (usuarioAlterado) => {
                    await userModel.create(usuarioAlterado);
                });
        }
        console.log("Carga de usuarios concluída!");

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