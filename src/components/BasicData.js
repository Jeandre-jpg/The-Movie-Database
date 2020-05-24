import React, { useState, useEffect } from "react";

export const BasicData = () => {
  const [loading] = useState(true);
  const [specialisations, setSpecialisations] = useState([]);
  const gender = 'male'
  const birth = '1989'
  const symptoms = [10,188]


  useEffect(() => {
    console.log("This component renderd");
    fetch(`https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis?language=en-gb&gender=${gender}&year_of_birth=${birth}&symptoms=${JSON.stringify(symptoms)}`, {
      headers: {
        "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
        "x-rapidapi-key" : "3e5cc177b2msh45fe811b0c65d5fp12dc48jsn6538a89b7db0",
        "useQueryString" : true
      }
    })
      .then(Response => {
        return Response.json();
      })
      .then(data => {
        console.log(data);
        setSpecialisations(data);
      })
      .catch(err => {
        console.log(`There was an error ${err}`);
      });
  }, [symptoms]);

  return (
    <div>
      <h1>Specialisations</h1>
  <pre>{JSON.stringify(specialisations)}</pre>
      {loading ? "Loading..." : ""}
      {specialisations.length > 0 ? (
        <setSpecialisations specialisations={specialisations} />
      ) : (
        "There are no Specialisations availible"
      )} 
    </div>
  );
};


