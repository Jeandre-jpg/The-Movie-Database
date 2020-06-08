import React from "react";
// import { BasicData } from "./components/BasicData";
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import Chart from './components/Chart';
import '../src/index.css';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './components/Footer';
var Component = React.Component;




const items = [
  { name: 'home', label: 'Home' },
  {
    name: 'Graphs',
    label: 'Graphs',
  },
  {
    name: 'Facts',
    label: 'Facts',
    
  },

  {
    name: 'More Information',
    label: 'More Information',
    
  },
]

class App extends Component {
  render() {
     return (
      <div>
        <Welcome/>
       <Sidebar items={items} />
       <Chart/>
       <
     
       </div>
     );
   }
 }
 export default App;

  