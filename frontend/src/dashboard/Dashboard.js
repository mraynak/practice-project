import React, { useEffect, useState } from "react";
import { listAnimals } from "../utils/api";
import { useHistory } from "react-router"
import Animals from "./Animals"
import ErrorAlert from "../layout/ErrorAlert";

function Dashboard() {
    //sets state variables to be used
  const [animals, setAnimals] = useState([]);
  const [animalsError, setAnimalsError] = useState(null)
  const history = useHistory()

  //loads the dashboard and rerenders when date changes
  useEffect(loadDashboard, []);

  //gets tables and reservations based on date
  function loadDashboard() {
    setAnimals([])
    const abortController = new AbortController();
    listAnimals(abortController.signal)
      .then(setAnimals)
      .catch(setAnimalsError)
    return () => abortController.abort();
  }

 return (
     <main>
        <ErrorAlert error={animalsError}/>
        <h1 className="mt-3">Animals:</h1>
        <div className="m-3">
            <div className="row">
                <Animals animals={animals} loadDashboard={loadDashboard}/>
                {/* {JSON.stringify(animals)} */}
            </div>
      </div>
     </main>
 )
}

export default Dashboard;