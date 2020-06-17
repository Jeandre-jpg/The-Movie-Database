import React, { useState, useEffect } from "react";
import { HorizontalBar } from "react-chartjs-2";





export const DataGraph = () => {
    const[chartData, setChartData] = useState({});
  
    const chart = () => {
      setChartData({
        datasets : [
          {
            labels: ['Ad Astra', 'The Taste of Next Door Sister', 'Artemis Fowl', 'Da 5 Bloods', 'Sonic the Hedgehog'],
            label: 'Popularity of Movies',
            data: [240.611,  224.626, 195.92, 158.609, 156.663],
            backgroundColor: ["#D90452", "#D90452", "#D90452", "#D90452", "#D90452"],
            borderWidth: 4
          }, {
            labels: ['Law & Order: Special Victims Unit', 'The Flash', 'Resurrection: Ertugrul', 'Supernatural', 'The 100'],
            label: 'Popularity of Movies',
            data: [183.633, 136.398,122.336, 141.292, 108.961],
            backgroundColor: ["#0476D9", "#0476D9", "#0476D9", "#0476D9", "#0476D9"],
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
        <h1 style={{fontFamily: "Roboto Slab, Times New Roman, serif", color: "#ffffff", textAlign: "center"}}>Popular Movies vs. Series:</h1>
        <div style={{height: '350px', width: '1100px'}}>
          <HorizontalBar style={{ Color: "#D90452"}}
            data={chartData}
            options={{
              responsive: true,
              title: { text: "Diffrent popularity Scales", display: true },
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
          />
        </div>
      </div>
    );
  };
  
  export default DataGraph;