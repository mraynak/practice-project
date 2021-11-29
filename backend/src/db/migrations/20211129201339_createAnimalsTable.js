
exports.up = function (knex) {
    return knex.schema.createTable("animals", (table) => {
      table.increments("animal_id").primary();
      table.string("animal_name")
      table.string("scientific_name")
      table.string("continents")
      table.string("image_src")
      table.string("status").defaultTo("unknown");
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("animals");
  };
