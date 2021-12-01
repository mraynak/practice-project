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

function read(animal_id) {
    return knex("animals")
        .select("*")
        .where({"animal_id": animal_id})
        .first()
}

function update(data) {
    return knex("animals")
        .where({"animal_id": data.animal_id})
        .update(data)
        .returning("*")
        .then((updatedRecords) => updatedRecords[0])
}

function destroy(animal_id) {
    return knex("animals")
        .where(({ "animal_id": animal_id }))
        .del()
}

function listByRegion(continents) {
    return knex("animals")
        .where('continents', 'like', `%${continents}%`)
        .select("*")
        .orderBy("animal_name")
}
module.exports = {
    list,
    create,
    read,
    update,
    delete: destroy,
    listByRegion,
}