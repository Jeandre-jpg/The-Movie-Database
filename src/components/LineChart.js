import React from 'react';
import {Line} from 'react-chartjs-2';
import BasicData from './BasicData';


const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Symptoms',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Symptoms vs. Disease Accuracy',
              fontSize:20
            }
          }}
        />
      </div>
    );
  }
}