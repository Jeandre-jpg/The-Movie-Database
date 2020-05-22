import React from "react";
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';


export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

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
