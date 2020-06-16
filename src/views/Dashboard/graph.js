import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import theater from "assets/img/flo-s-8-cafe-1080953.jpg";


// const DataGraph = () => {
//   const [chartData, setChartData] = useState({});

//   const chart = () => {
//     let personName = [];
//     let personPopularity = [];
//     axios
//       .get("http://api.themoviedb.org/3/trending/person/week?&api_key=03420be3fa8716c7bb9adbd3427279c5")
//       .then(res => {
//         console.log(res);
//         for (const dataObj of res.data.data) {
//           personName.push(parseInt(dataObj.results.name));
//           personPopularity.push(parseInt(dataObj.results.popularity));
//         }
//         setChartData({
//           labels: personPopularity,
//           datasets: [
//             {
//               label: "level of thiccness",
//               data: personName,
//               backgroundColor: ["rgba(75, 192, 192, 0.6)"],
//               borderWidth: 4
//             }
//           ]
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     console.log(personName, personPopularity);
//   };

//   useEffect(() => {
//     chart();
//   }, []);
//   return (
//     <div className="App">
//       <h1>People that are Trending this week</h1>
//       <div>
//         <Line
//           data={chartData}
//           options={{
//             responsive: true,
//             title: { text: "Trendiness Scale", display: true },
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     autoSkip: true,
//                     maxTicksLimit: 10,
//                     beginAtZero: true
//                   },
//                   gridLines: {
//                     display: false
//                   }
//                 }
//               ],
//               xAxes: [
//                 {
//                   gridLines: {
//                     display: false
//                   }
//                 }
//               ]
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default DataGraph;

// const DataGraph = () => {
//     const [chartData, setChartData] = useState({});
//     const [name, setName] = useState([]);
//     const [popularity, setPopularity] = useState([]);
  
//     const chart = () => {
//       let personName = [];
//       let personPopularity = [];
//       axios
//         .fetch("https://api.themoviedb.org/3/trending/person/week?api_key=03420be3fa8716c7bb9adbd3427279c5")
//         .then(res => {
//           console.log(res);
//           for (const dataObj of res.data.data) {
//             personName.push(parseInt(dataObj.result.name));
//             personPopularity.push(parseInt(dataObj.result.popularity));
//           }
//           setChartData({
//             labels: personName,
//             datasets: [
//               {
//                 label: "level of trendiness",
//                 data: personPopularity,
//                 backgroundColor: ["rgba(75, 192, 192, 0.6)"],
//                 borderWidth: 4
//               }
//             ]
//           });
//         })
//         .catch(err => {
//           console.log(err);
//         });
//       console.log(personName, personPopularity);
//     };
  


export const DataGraph = () => {
  const[chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['Brad Pitt', 'Tom Hanks', 'Leonardo DiCaprio', 'Quentin Tarantin', 'Nicolas Cage'],
      datasets : [
        {
          label: 'Popularity Scale',
          data: [27.304, 21.372, 14.466, 17.029, 11.928],
          backgroundColor: ["#F2059F"],
          borderWidth: 4
        }
      ]
    })
  }
useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1 style={{fontFamily: "Roboto Slab, Times New Roman, serif", color: "#ffffff"}}>Trending People of the Week:</h1>
      <div style={{height: '350px', width: '650px'}}>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Level of Trendiness", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        /><img src={theater} style={{backgroundSize: "cover", backgrounRepeat:"no-repeat", maxWidth:"20vw", marginLeft:"115%", marginTop:"-40vw", border:"10px solid #2F1D73", padding:"15px"}} alt="theater"/>
      </div>
    </div>
  );
};

export default DataGraph;