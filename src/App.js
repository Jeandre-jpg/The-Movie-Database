import React from "react";
import "./styles.css";

export const RapidAPI = require('rapidapi-connect');
  
fetch('https://rapidapi.com/priaid/api/symptom-checker/endpoints')
  .then(response => response.json())
  .then(data => console.log(data));
