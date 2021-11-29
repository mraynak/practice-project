
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE animals RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("animals").insert([
        {
          "animal_name": "Tiger",
          "scientific_name": "Panthera Tigris",
          "continents": "Asia",
          "image_src": "https://cdn.britannica.com/s:690x388,c:crop/40/75640-050-F894DD85/tiger-Siberian.jpg",
          "status": "Endangered",
          "created_at": "2021-11-10T08:30:32.326Z",
          "updated_at": "2021-11-10T08:30:32.326Z"
        },
        {
          "animal_name": "Rhino",
          "scientific_name": "Rhinocerotidae",
          "continents": "Africa, Asia",
          "image_src": "https://blog.aci.aero/wp-content/uploads/2019/09/shutterstock_432544738-1904x1269.jpg",
          "status": "Endangered",
          "created_at": "2021-11-10T08:30:32.326Z",
          "updated_at": "2021-11-10T08:30:32.326Z"
        },
        {
          "animal_name": "Lion",
          "scientific_name": "Panthera Leo",
          "continents": "Africa",
          "image_src": "https://www.vibesofindia.com/wp-content/uploads/2021/10/lion-Kenya-Masai-Mara-National-Reserve-930x527.jpg",
          "status": "Endangered",
          "created_at": "2021-11-10T08:30:32.326Z",
          "updated_at": "2021-11-10T08:30:32.326Z"
        },
        {
          "animal_name": "Bald Eagle",
          "scientific_name": "Haliaeetus Leucocephalus",
          "continents": "North America",
          "image_src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/About_to_Launch_%2826075320352%29.jpg/1920px-About_to_Launch_%2826075320352%29.jpg",
          "status": "Endangered",
          "created_at": "2021-11-10T08:30:32.326Z",
          "updated_at": "2021-11-10T08:30:32.326Z"
        },
        {
          "animal_name": "Woolly Mammoth",
          "scientific_name": "Mammuthus Primigenius",
          "continents": "Asia, Europe, North America",
          "image_src": "https://static.dw.com/image/44530435_303.jpg",
          "status": "Extinct",
          "created_at": "2021-11-10T08:30:32.326Z",
          "updated_at": "2021-11-10T08:30:32.326Z"
        },
      ]);
    });
};
