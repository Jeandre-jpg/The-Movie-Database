import React, { Component } from 'react';
import './App.css';
import '../img/hospital-medical-staff-team-01-.jpg'

class App extends Component {
    render() {
       return (
         <div className="main">
           <div className="search">
              <input type="text"></input>
              <input type="submit"></input>
           </div>
            <div className="nav">
              <ul>
                <a href="#"><li>Graphs</li></a>
                <a href="#"><li>Facts</li></a>
                <a href="#"><li>More Information</li></a>
              </ul>
            </div>
           <div className="photos">
            <ul>
              <li><img src="../img/hospital-medical-staff-team-01-.jpg" alt="Header"/></li>
        
            </ul>
           </div>
         </div>  
       );
    }
  }
  
  export default App;
  
// import api from '../api'
const IndexPage = () => {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')
    // fetches data
    const fetchData = (e) => {
        e.preventDefault()
        // api.getData()
        .then((response)=>{
            setResponseData(response.data)
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <h1>{responseData.title}</h1>
            <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>
            {responseData.dates && responseData.dates.map(date => {
                return <p>{date}</p>
            })}
        </div>
    )
}
export default IndexPage

