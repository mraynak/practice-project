import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "./ErrorAlert";

function Form({ formData, setFormData, submitHandler, animal }) {
  //set state variables
  const [nameError, setNameError] = useState(null);
  const [scienceError, setScienceError] = useState(null);
  const [imageError, setImageError] = useState(null);

  const history = useHistory();

  //recognize changes and sets form data to new changes also sets errors if fields contain invalid data
  function changeHandler({ target }) {
    if (!animal) {
      if (target.name === "animal_name") {
        if (target.value.length < 1) {
          setNameError({
            message: "Name must be included",
          });
        }
        if (target.value.length > 0) {
          setNameError(null);
        }
      }
      if (target.name === "scientific_name") {
        if (target.value.length < 1) {
          setScienceError({
            message: "Scientific name must be included",
          });
        }
        if (target.value.length > 0) {
          setScienceError(null);
        }
      }
      if (target.name === "image_src") {
        if (target.value.length < 1) {
          setImageError({
            message: "Image URL must be included",
          });
        }
        if (target.value.length > 0) {
          setImageError(null);
        }
      }
    }
    if (target.name === "continents") {
      const Africa = document.getElementById("Africa");
      const Asia = document.getElementById("Asia");
      const Oceania = document.getElementById("Oceania");
      const Europe = document.getElementById("Europe");
      const Americas = document.getElementById("Americas");
      let contsArray = [];
      if (Asia.checked) {
        contsArray.push(Asia.value);
      }
      if (Africa.checked) {
        contsArray.push(Africa.value);
      }
      if (Oceania.checked) {
        contsArray.push(Oceania.value);
      }
      if (Europe.checked) {
        contsArray.push(Europe.value);
      }
      if (Americas.checked) {
        contsArray.push(Americas.value);
      }
      target.value = contsArray.join(", ")
    }
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
    console.log(formData);
  }
  return (
    <form>
      <div className="form-group col-xs-3">
        <label className="form-label" htmlFor="animal-name">
          Animal Name:
        </label>
        <ErrorAlert error={nameError} />
        <input
          type="text"
          className="form-control"
          id="form-input"
          name="animal_name"
          required={true}
          onChange={changeHandler}
          placeholder={animal ? animal.animal_name : "Animal Name"}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="scientific-name">
          Scientific Name:
        </label>
        <ErrorAlert error={scienceError} />
        <input
          type="text"
          className="form-control"
          id="form-input"
          name="scientific_name"
          required={true}
          onChange={changeHandler}
          placeholder={animal ? animal.scientific_name : "Scientific Name"}
        />
      </div>
      {/* <div className="form-group">
                    <label className="form-label" htmlFor="continents">Continents:</label>
                    <ErrorAlert error={continentsError} />
                    <input
                        type="text"
                        className="form-control"
                        id="form-input"
                        name="continents"
                        required={true}
                        onChange={changeHandler}
                        placeholder={animal ? animal.continents :"Continents"}
                    />
                </div> */}
      <div className="form-group">
        <label className="form-label" htmlFor="image-src">
          Image URL:
        </label>
        <ErrorAlert error={imageError} />
        <input
          type="text"
          className="form-control"
          id="form-input"
          name="image_src"
          required={true}
          onChange={changeHandler}
          placeholder={animal ? animal.image_src : "Image URL"}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="status">
          Status:
        </label>
        <ErrorAlert error={scienceError} />
        <input
          type="text"
          className="form-control"
          id="form-input"
          name="status"
          required={true}
          onChange={changeHandler}
          placeholder={animal ? animal.status : "Status"}
        />
      </div>
      <div className="form-group">
        <h6 className="form-label" htmlFor="continents">
          Continents:
        </h6>
        <div className="ml-4">
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="Africa"
              name="continents"
              onChange={changeHandler}
              value="Africa"
            />
            <label htmlFor="Africa">Africa</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="Asia"
              name="continents"
              onChange={changeHandler}
              value="Asia"
            />
            <label htmlFor="Asia">Asia</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="Oceania"
              name="continents"
              onChange={changeHandler}
              value="Oceania"
            />
            <label htmlFor="Oceania">Oceania</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="Europe"
              name="continents"
              onChange={changeHandler}
              value="Europe"
            />
            <label htmlFor="Europe">Europe</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="Americas"
              name="continents"
              onChange={changeHandler}
              value="Americas"
            />
            <label htmlFor="Americas">Americas</label>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button
          type="submit"
          className="btn btn-primary submit_button"
          onClick={submitHandler}
        >
          Submit
        </button>
        <button
          type="cancel"
          className="btn btn-secondary ml-3"
          onClick={history.goBack}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Form;
