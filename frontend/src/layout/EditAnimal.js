import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom"
import { readAnimal, editAnimal } from "../utils/api"
import Form from "./Form"
import ErrorAlert from "./ErrorAlert"

function EditAnimal() {
    const history = useHistory()

    //set state variables
    const [formData, setFormData] = useState({})
    const [animalError, setAnimalError] = useState(null)
    const [animal, setAnimal] = useState([])
    const {animal_id} = useParams()
    
    useEffect(loadAnimal, [animal_id])
    function loadAnimal() {
        const abortController = new AbortController()
        setAnimalError(null)
        readAnimal(animal_id)
            .then(setAnimal)
        readAnimal(animal_id)
            .then(res => setFormData({
                animal_id: res.animal_id,
                animal_name: res.animal_name,
                scientific_name: res.scientific_name,
                continents: res.continents,
                image_src: res.image_src,
                status: res.status,
            }
        ))
            .catch(setAnimalError)
        return () => abortController.abort();
    }

    //button handler for submit button to add reservation to database
    function submitHandler(event) {
        event.preventDefault()
        const abortController = new AbortController()
        editAnimal(formData, abortController.signal)
        .then(() => {history.push(`/dashboard`)})
        .catch(setAnimalError)
    }

    return (
        <>
        <div>
            <ErrorAlert error={animalError} />
            <h1 className="mt-3">Edit: {animal.animal_name}</h1>
            <div className="card m-2" style={{"width": "18rem"}} key={animal_id}>
                <img className="card-img-top" src={animal.image_src} alt="Not responsive"/>
                <div className="card-body">
                    <h5 className="card-title">Name: {animal.animal_name}</h5>
                    <h6 className="card-subtitle">Scientific Name: {animal.scientific_name}</h6>
                    <h6 className="card-text">Continents: {animal.continents}</h6>
                    <h6 className="card-text">Status: {animal.status}</h6>
                </div>
            </div>
            <Form formData = {formData} setFormData = {setFormData} submitHandler={submitHandler} animal={animal}/>
        </div>
        </>
    )
}

export default EditAnimal