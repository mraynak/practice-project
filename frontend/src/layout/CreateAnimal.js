import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import { createAnimal } from "../utils/api"
import Form from "./Form"
import ErrorAlert from "./ErrorAlert"

function CreateReservation() {
    const history = useHistory()

    //sets initial form data to empty with exception of status which is automaticaly boooked
    const initialFormState = {
        animal_name: "",
        scientific_name: "",
        continents: "",
        image_src: "",
    }

    //set state variables
    const [formData, setFormData] = useState(initialFormState)
    const [animalError, setAnimalError] = useState(null)

    //button handler for submit button to add reservation to database
    function submitHandler(event) {
        event.preventDefault()
        const abortController = new AbortController()
        createAnimal(formData, abortController.signal)
        .then(() => {history.push(`/dashboard`)})
        .catch(setAnimalError)
    }

    return (
        <>
        <div>
            <ErrorAlert error={animalError} />
            <h1 className="mt-3">Create Animal</h1>
            <Form formData = {formData} setFormData = {setFormData} submitHandler={submitHandler} />
        </div>
        </>
    )
}

export default CreateReservation