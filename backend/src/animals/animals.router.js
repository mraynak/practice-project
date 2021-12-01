const router = require("express").Router();
const controller = require("./animals.controller");
const methodNotAllowed = require("../errors/methodNotAllowed")

router
    .route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

router
    .route("/:animal_id")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed)

router
    .route("/search/:continents")
    .get(controller.listRegion)
    .all(methodNotAllowed)

module.exports = router