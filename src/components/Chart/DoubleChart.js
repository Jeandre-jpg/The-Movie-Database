import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export const Chart = () => {
  const[chartData, setChartData] = useState({});
  const apiKey = '03420be3fa8716c7bb9adbd3427279c5'
  
  const getTrendingPeople = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`) 
    const data = await response.json() 
    return data.results
  }

  const transformData = async () => { 
    const data = await getTrendingPeople()
    return {
      title: data.map(data => data.title), 
      popularity: data.map(data => data.popularity)
    }
  }
 
  const chart = async () => {
    const { title, popularity } = await transformData()
    return {
      labels: title,
      datasets : [
        {
          label: 'Popularity Scale',
          data: popularity,
          backgroundColor: ["#C004D9", "#C004D9", "#C004D9", "#C004D9","#C004D9", "#C004D9", "#C004D9","#C004D9" ,"#C004D9", "#C004D9", "#C004D9","#C004D9","#C004D9","#C004D9","#C004D9","#C004D9","#C004D9","#C004D9","#C004D9","#C004D9"],
          borderWidth: 4
        },
        {
            label: title,
            data: popularity,
            backgroundColor: ["#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C","#03A61C"],
            borderWidth: 4
            
        },
      ]
    }
  }
 useEffect(() => {
   const formattedData = async () => {
    setChartData(await chart());
   }
   formattedData()
  }, []);
  return (
    <div className="App">
      <h1 style={{fontFamily: "Roboto Slab, Times New Roman, serif", color: "#ffffff"}}>Trending Movies vs. Series of the Week:</h1>
      <div style={{height: '550px', width: '1250px'}}>
        <Bar
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
        />
      </div>
    </div>
  );
};

export default Chart;


