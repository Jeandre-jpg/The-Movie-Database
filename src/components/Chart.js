import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Cough', 'Back Pain', 'Chest Pain',
           'Weezing', 'Palpaitations', 'Nausea', 'Heartburn'],
  datasets: [
    {
      label: 'Symptoms',
      backgroundColor: '#aed3f2',
      borderColor: '#aed3f2',
      borderWidth: 1,
	  data: [45, 55, 65, 75, 85, 95, 105],
	  height: '50vw'
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Most Common Symptoms',
              fontSize:20
            }
          }}
        />
      </div>
    );
  }
}

