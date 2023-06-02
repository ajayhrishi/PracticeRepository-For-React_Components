import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/index.css"
import App from './pages/App'

import Navigator from "./context/NavigationContext";



const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<div>
    
    <Navigator>
    <div className='modals-receiver'></div> 
    <App/>
    </Navigator>
    </div>
    );

    /*the div with the className 'modals-receiver' is the div using to receive the modal component that is sent via createPortal react DomHook.
        We are using it to avoid the overide of the CSS properties of the Modal component with it's parent element and to show above all the other 
        element on the screen properly */