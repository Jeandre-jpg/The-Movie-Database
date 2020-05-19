import React, { useState, useEffect } from "react";

export const BasicData = () => {
  const [loading, setLoading] = useState(true);
  const [missions, setSpecialisations] = useState([]);

  useEffect(() => {
    console.log("This component renderd");
    fetch("https://priaid-symptom-checker-v1.p.rapidapi.com/specialisations")
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
  }, []);

  return (
    <div>
      <h1>Specialisations</h1>
      {loading ? "Loading..." : ""}
      {missions.length > 0 ? (
        <ListMissions missions={missions} />
      ) : (
        "There are no Specialisations availible"
      )}
    </div>
  );
};
