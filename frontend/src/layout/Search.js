import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { listAnimals } from "../utils/api";
import {useHistory} from "react-router-dom"

function Search() {
  const [animals, setAnimals] = useState([]);
  const history = useHistory()

  //loads the dashboard and rerenders when date changes
  useEffect(loadDashboard, []);

  //gets tables and reservations based on date
  function loadDashboard() {
    setAnimals([]);
    const abortController = new AbortController();
    listAnimals(abortController.signal).then(setAnimals)
    return () => abortController.abort();
  }
  let Americas = []
  let Oceania = []
  let Africa = []
  let Asia = []
  let Europe = []
  animals.map((animal) => {
      if(animal.continents.includes("Americas")) {
          Americas.push(animal.animal_name)
      }
      if(animal.continents.includes("Oceania")) {
        Oceania.push(animal.animal_name)
    }
    if(animal.continents.includes("Africa")) {
        Africa.push(animal.animal_name)
    }
    if(animal.continents.includes("Asia")) {
        Asia.push(animal.animal_name)
    }
    if(animal.continents.includes("Europe")) {
        Europe.push(animal.animal_name)
    } 
  })

  const mapData = [
    ["Region Code", "Continents", "Number of Species", { role: "tooltip", type: "string", p: { html: true } }],
    ["002", "Africa", Africa.length, "Species in Africa: " + Africa.join(", ")],
    ["150", "Europe", Europe.length, "Species in Europe: " + Europe.join(", ")],
    ["019", "Americas", Americas.length, "Species in Americas: " + Americas.join(", ")],
    ["142", "Asia", Asia.length, "Species in Asia: " + Asia.join(", ")],
    ["009", "Oceania", Oceania.length, "Species in Oceania: " + Oceania.join(", ")],
  ]

  const chartEvents = [
    {
      eventName: "select",
      callback({ chartWrapper }) {
          const selection = chartWrapper.getChart().getSelection()
          const country = mapData[selection[0].row+1]
        history.push(`/animals/search/${country[1]}`)
      }
    }
  ];
  return (
    <div>
        <h1 className="mt-3">Search by Continent:</h1>
      <Chart
        width={"90%"}
        height={"90%"}
        className="text-align-center m-4"
        chartType="GeoChart"
        data={mapData}
        options={{
          resolution: "continents",
          tooltip: { isHtml: true, trigger: "visible" },
          colorAxis: {minValue: 0,  colors: ['#effbf9', '#225560']}
        }}
        rootProps={{ "data-testid": "3" }}
        chartEvents={chartEvents}
      />
    </div>
  );
}

export default Search;
