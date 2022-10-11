import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App"
// import { createRoot } from 'react-dom/client';



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);


// ReactDOM.render(<App/>, document.getElementById('root'));


