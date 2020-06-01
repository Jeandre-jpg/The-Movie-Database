import React from "react";
import { BasicData } from "./components/BasicData";
import Sidebar from './components/Sidebar';
var Component = React.Component;
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';




const items = [
  { name: 'home', label: 'Home' },
  {
    name: 'billing',
    label: 'Billing',
    items: [
      { name: 'statements', label: 'Statements' },
      { name: 'reports', label: 'Reports' },
    ],
  },
  {
    name: 'settings',
    label: 'Settings',
    items: [{ name: 'profile', label: 'Profile' }],
  },
]

function App() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default App


class Column extends Component {
	render() {
		const options = {
			title: {
				text: "Most Common Symptoms"
			},
			data: [
			{
		
        type: "column",
        dataPoints: [
          { label: "Cough",  y: 10  },
          { label: "Chest pain", y: 15  },
          { label: "Shortness of breath", y: 25  },
          { label: "Wheezing",  y: 30  },
          { label: "Chest tightness",  y: 28  },
          { label: "Palpitations",  y: 32  },
          { label: "Nausea",  y: 35  },
          { label: "Heartburn",  y: 35  },
          { label: "Night cough",  y: 38  },
          { label: "Fast, deepened breathing",  y: 40  },
          { label: "Bloody cough",  y: 25  },
          { label: "Breathing-related pains",  y: 35  },
          { label: "Heart murmur",  y: 35  },
          { label: "Irregular heartbeat",  y: 38  },
        
				]
			}
			]
		}
		return (
		<div>
			{/* <CanvasJSChart options = {options}
				onRef={ref => this.chart = ref} 
			/> */}
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
// module.exports = Column;         

// export default function SimpleMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  // return (
  //   <div className="App" style={{ color: "pink" }}>
  //     <h1>Hello {name}</h1>
  //     <h2>Start editing to see some magic happen!</h2>
  //     {element}
  //     {name}
  //   <div>
  //     <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  //       Open Menu
  //     </Button>
  //     <Menu
  //       id="simple-menu"
  //       anchorEl={anchorEl}
  //       keepMounted
  //       open={Boolean(anchorEl)}
  //       onClose={handleClose}
  //     >
  //       <MenuItem onClick={handleClose}>Profile</MenuItem>
  //       <MenuItem onClick={handleClose}>My account</MenuItem>
  //       <MenuItem onClick={handleClose}>Logout</MenuItem>
  //     </Menu>
  //   </div>
  // );