import React from "react"

function Animals({animals, loadDashboard}) {

    //map reservations and assign to a variable
    const cards = animals.map((animal) => {
        
        const animal_id = animal.reservation_id
        return (
            <div className="card m-2" style={{"width": "18rem"}} key={animal_id}>
                <img className="card-img-top" src={animal.image_src} alt="Not responsive"/>
                <div className="card-body">
                    <h5 className="card-title">Name: {animal.animal_name}</h5>
                    <h6 className="card-subtitle">Scientific Name: {animal.scientific_name}</h6>
                    <p className="card-text">Continents: {animal.continents}</p>
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