import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/index.css"
import App from './pages/App'

import Navigator from "./context/NavigationContext";



const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<Navigator>
    <App/>
    </Navigator>);