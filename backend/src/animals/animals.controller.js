const animalsService = require("./animals.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

async function list(req, res, next) {
    const data = await animalsService.list()
    res.json({data: data})
}

// creates a new table
async function create(req, res) {
    res.status(201).json({ data: await animalsService.create(res.locals.data) })
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

module.exports = {
    list: [asyncErrorBoundary(list)],
    create: [hasData, hasValidProperties, asyncErrorBoundary(create)]
}