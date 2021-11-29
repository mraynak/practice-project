const knex = require("../db/connection");

//list function
function list() {
    return knex("animals")
        .select("*")
        .orderBy("animal_name")
}

function create(animal) {
    return knex("animals")
        .insert(animal)
        .returning("*")
        .then((updatedRecords) => updatedRecords[0])
}

module.exports = {
    list,
    create,
}