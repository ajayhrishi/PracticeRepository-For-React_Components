import {useState} from 'react'
import Dropdown from "../components/dropdown";

function DropDownPage(){
    const [display, changeDisplay]= useState(null);
    return <div >
        
        <div>
            <Dropdown data={options} Display={display} InputHandler={(item)=>{changeDisplay(item)}}/>
        </div>
    </div>
}

export default DropDownPage;

/* DropDown Component COMPONENT */

const options = [{id:2, option:"Shirts"},{id:3, option:"Pants"},{id:4, option:"Shoes"},{id:5, option:"Hats"},{id:6, option:"Bags"},{id:7, option:"Watches"},{id:8, option:"Belts"}];
