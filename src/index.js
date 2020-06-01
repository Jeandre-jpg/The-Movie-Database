import React from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";

import Sidebar from "./components/Sidebar";


const App = ({ children }) => (
  <Container>
  

    {children}
  </Container>
);


const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <Sidebar />
  </App>,
  document.getElementById("root")
);