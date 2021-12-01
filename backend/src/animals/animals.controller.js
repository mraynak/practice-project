const animalsService = require("./animals.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

async function list(req, res, next) {
    const data = await animalsService.list()
    console.log(data)
    res.json({data: data})
}

async function listByReg(req, res, next) {
    const {continents} = req.params
    console.log(continents)
    const data = await animalsService.listByRegion(continents)
    res.json({data: data})
}

//lists a single reservation based on reservation_id
function read(req, res) {
    res.json({data: res.locals.animal})
  }

// creates a new table
async function create(req, res) {
    res.status(201).json({ data: await animalsService.create(res.locals.data) })
  }

async function update(req, res, next) {
    res.json({data: await animalsService.update(res.locals.data)})
  }

//Validators

//confirms that request has data
function hasData(req, res, next) {
    const {data} = req.body
  
    if(!data) {
      return next({
        status: 400, 
        message: "Values should be in the 'data' section of the request body"
      })
    }
    res.locals.data = data
    return next()
  }

//confirms that the fields for the given data for a new table are valid
function hasValidProperties(req, res, next) {
    const {animal_name, scientific_name, image_src, continents} = res.locals.data
    
    if(!animal_name || !animal_name.length) {
        return next({status: 400, message: "Animal name is required for creation"})
    }
    if(!scientific_name || !scientific_name.length) {
        return next({status: 400, message: "Scientific name is required for creation"})
    }
    if(!image_src || !image_src.length) {
        return next({status: 400, message: "Image URL is required for creation"})
    }
    if(!continents|| !continents.length) {
        return next({status: 400, message: "Constinents are required for creation"})
    }
    return next()
  }

async function animalExists(req, res, next) {
    const {animal_id} = req.params
    const animal = await animalsService.read(animal_id)

    if(animal) {
        res.locals.animal = animal
        return next()
    }
    return next({
        status: 404,
        message: `Animal ${animal_id} cannot be found`
    })
}

async function destroy(req, res) {
    const {animal} = res.locals
    await animalsService.delete(animal.animal_id)
    res.sendStatus(204)
}

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(animalExists), read],
    create: [hasData, hasValidProperties, asyncErrorBoundary(create)],
    update: [asyncErrorBoundary(animalExists), hasData, hasValidProperties, asyncErrorBoundary(update)],
    delete: [asyncErrorBoundary(animalExists), asyncErrorBoundary(destroy)],
    listRegion: [asyncErrorBoundary(listByReg)]
}