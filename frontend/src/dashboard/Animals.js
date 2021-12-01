import React from "react"
import {useHistory} from "react-router"
import { deleteAnimal } from "../utils/api"

function Animals({animals, loadDashboard}) {
    const history = useHistory()

    //map reservations and assign to a variable
    const cards = animals.map((animal) => {

        function deleteHandler(event) {
            event.preventDefault()
    
            const abortController = new AbortController()
            
            //confirmation window
            if (window.confirm('Do you want to delete this animal? This cannot be undone.')) {
                
                //setting reservation status
                deleteAnimal(animal.animal_id, abortController.signal)
                    .then(loadDashboard)
            }
        }
        
        const animal_id = animal.animal_id
        return (
            <div className="card m-2" style={{"width": "18rem"}} key={animal_id}>
                <img className="card-img-top" src={animal.image_src} alt="Not responsive"/>
                <div className="card-body">
                    <h5 className="card-title">Name: {animal.animal_name}</h5>
                    <h6 className="card-subtitle">Scientific Name: {animal.scientific_name}</h6>
                    <h6 className="card-text">Continents: {animal.continents}</h6>
                    <h6 className="card-text">Status: {animal.status}</h6>
                </div>
                <div className="text-center">
                <button className="btn btn-primary m-3" onClick={(() => {history.push(`/animals/${animal.animal_id}/edit`)})}>Edit</button>
                <button className="btn btn-danger m-3" onClick={deleteHandler}>Delete</button>
                </div>
            </div>
        )
    })
    return (
        <>
            {cards}
        </>
    )
}

export default Animals