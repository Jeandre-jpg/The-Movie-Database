import React, { useState, useEffect } from "react";
export const BasicData = () => {
  const [loading] = useState(true);
  const [trending, setTrending] = useState([]);
  // const name= '';


  useEffect(() => {
    console.log("This component renderd");
    fetch(`https://api.themoviedb.org/3/trending/person/week?api_key=03420be3fa8716c7bb9adbd3427279c5`)
      .then(Response => {
        return Response.json()
      })
      .then(data => {
        console.log(data);
        setTrending(data);
      })
      .catch(err => {
        console.log(`There was an error ${err}`);
      });
  }, []);

  return (
    <div>
      <h1>Trending People</h1>
  <pre>{JSON.stringify(trending)}</pre>
      {loading ? "Loading..." : ""}
      {trending.length > 0 ? (
        <setTrending trending={trending} />
      ) : (
        "There are no Trending people availible"
      )} 
    </div>
  );
};


export default BasicData;