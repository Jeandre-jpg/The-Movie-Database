import React, { useState, useEffect } from "react";

export const BasicData = () => {
  const [loading, setLoading] = useState(true);
  const [specialisations, setSpecialisations] = useState([]);
  const gender = 'male'
  const birth = '1989'
  const symprtoms = [10,188]


  useEffect(() => {
    console.log("This component renderd");
    fetch(`https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis?language=en-gb&gender=${gender}&year_of_birth=${birth}&symptoms=${JSON.stringify(symprtoms)}`, {
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
  }, []);

  return (
    <div>
      <h1>Specialisations</h1>
  <pre>{JSON.stringify(specialisations)}</pre>
      {/* {loading ? "Loading..." : ""}
      {specialisations.length > 0 ? (
        <setSpecialisations specialisations={specialisations} />
      ) : (
        "There are no Specialisations availible"
      )} */}
    </div>
  );
};





//From Mozilla


// import React from 'react'
// import api from '../api'
// const IndexPage = () => {

//     let [responseData, setResponseData] = React.useState('')

//     const fetchData = (e) => {
//         e.preventDefault()
//         api.getData()
//         .then((response)=>{
//             setResponseData(response.data)
//             console.log(response)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     }
//     return (
//         <div>
//             <h1>{responseData.title}</h1>
//             <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>
//             {responseData.dates && responseData.dates.map(date => {
//                 return <p>{date}</p>
//             })}
//         </div>
//     )
// }
// export default IndexPage



// export const BasicData = () => {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         fetch('https://priaid-symptom-checker-v1.p.rapidapi.com/specialisations')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             setData(data)
//         })

//     })

//     return (
//         <div>

//         </div>
//     )
// }









// export const BasicData = () => {
//   const [loading, setLoading] = useState(true);
//   const [symptoms, setSymptoms] = useState([]);

//   useEffect(() => {
//     console.log("This component renderd");
//     fetch("https://priaid-symptom-checker-v1.p.rapidapi.com/specialisations")
//       .then(Response => {
//         return Response.json();
//       })
//       .then(data => {
//         console.log(data);
//         setSymptoms(data);
//       })
//       .catch(err => {
//         console.log(`There was an error ${err}`);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Symptoms</h1>
//       {loading ? "Loading..." : ""}
//       {symptoms.length > 0 ? (
//         <ListSymptoms symptoms={symptoms} />
//       ) : (
//         "There are no symptoms availible"
//       )}
//     </div>
//   );
// };

// // const ListSymptoms = ({ symptoms }) => {
// //   return (
// //     <ul>
// //       {symptoms.map(symptoms, index) => {
// //         return( <li key={index}>{mission.mission_name}</li>;
// //         );
// //       })}
// //     </ul>
// //   );
// // };










// //From RapidAPI







// // var http = require("https");

// // var options = {
// // 	"method": "GET",
// // 	"hostname": "priaid-symptom-checker-v1.p.rapidapi.com",
// // 	"port": null,
// // 	"path": "/specialisations?language=en-gb",
// // 	"headers": {
// // 		"x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
// // 		"x-rapidapi-key": "39c770cd44msh029e894434154aep136467jsnf9fb2fa3391f",
// // 		"useQueryString": true
// // 	}
// // };

// // var req = http.request(options, function (res) {
// // 	var chunks = [];

// // 	res.on("data", function (chunk) {
// // 		chunks.push(chunk);
// // 	});

// // 	res.on("end", function () {
// // 		var body = Buffer.concat(chunks);
// // 		console.log(body.toString());
// // 	});
// // });

// // req.end();



// // var http = require("https");

// // var options = {
// // 	"method": "GET",
// // 	"hostname": "priaid-symptom-checker-v1.p.rapidapi.com",
// // 	"port": null,
// // 	"path": "/symptoms?format=json&language=en-gb",
// // 	"headers": {
// // 		"x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
// // 		"x-rapidapi-key": "39c770cd44msh029e894434154aep136467jsnf9fb2fa3391f",
// // 		"useQueryString": true
// // 	}
// // };

// // var req = http.request(options, function (res) {
// // 	var chunks = [];

// // 	res.on("data", function (chunk) {
// // 		chunks.push(chunk);
// // 	});

// // 	res.on("end", function () {
// // 		var body = Buffer.concat(chunks);
// // 		console.log(body.toString());
// // 	});
// // });

// // req.end();