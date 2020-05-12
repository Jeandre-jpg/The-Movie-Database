import React, { useEffect, useState} from 'react'

export const BasicData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })

    })

    return (
        <div>

        </div>
    )
}

import React, { useState, useEffect } from "react";

export const BasicData = () => {
  const [loading, setLoading] = useState(true);
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    console.log("This component renderd");
    fetch("https://api.spacexdata.com/v3/missions")
      .then(Response => {
        return Response.json();
      })
      .then(data => {
        console.log(data);
        setMissions(data);
      })
      .catch(err => {
        console.log(`There was an error ${err}`);
      });
  }, []);

  return (
    <div>
      <h1>Missions</h1>
      {loading ? "Loading..." : ""}
      {missions.length > 0 ? (
        <ListMissions missions={missions} />
      ) : (
        "There are no missions availible"
      )}
    </div>
  );
};

// const ListMissions = ({ missions }) => {
//   return (
//     <ul>
//       {missions.map(mission, index) => {
//         return <li key={index}>{mission.mission_name}</li>;
//       })}
//     </ul>
//   );
// };
