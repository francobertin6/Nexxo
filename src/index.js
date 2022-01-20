// import React
import React from 'react';

// import react-dom
import ReactDom from 'react-dom';

// import App
import App from "./App.js";

// estilos de NavBar
import "./styles/NavBar.css";

// estilos de Main
import "./styles/Main.css";

// estilos de cart
import "./styles/Cart.css"

// import estilos de toast
import 'react-toastify/dist/ReactToastify.css';


ReactDom.render(<App />, document.getElementById("root"));