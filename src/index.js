<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
import React from 'react'
import api from '../api'
const IndexPage = () => {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')
    // fetches data
    const fetchData = (e) => {
        e.preventDefault()
        api.getData()
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
>>>>>>> parent of 80d0e680... Image and headers
