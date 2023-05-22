require("./mongodb");
const mongoose = require("mongoose");
const movieModel = require("../models/movieModel");
const movies = require("./movies.json");

async function carregarDados() {
    try {
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