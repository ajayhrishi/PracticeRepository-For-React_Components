import {useState} from 'react'

import { DiCoda } from "react-icons/di";
import { AiFillWarning } from "react-icons/ai";
import { BiCartAlt,BiAnalyse,BiRupee,BiArrowFromLeft } from "react-icons/bi";

import Button from '../components/Button'
import Accordion from '../components/Accordion'
import Dropdown from "../components/dropdown";


function App(){
    const [display, changeDisplay]= useState(null);
    return <div >
        
        <div className='float-right'>
            <Dropdown data={options} Display={display} InputHandler={(item)=>{changeDisplay(item)}}/>
        </div>

        <div className="border rounded-xl border-2 border-zinc-200 py-2 px-2 w-3/5 text-center" >
            <h1>Testing the Accordion</h1>
            <Accordion data={data}/>
        </div>  
        <div>
        <Button > <DiCoda/>Normal Button</Button>
        <Button primary rounded className={'rounded-full	'}onClick={()=>{console.log("Clicked on the Buy now button")}}><BiRupee/>Buy Now</Button>
        <Button secondary rounded onClick={()=>{console.log("Clicked on the Add to cart button")}}><BiCartAlt/>Add to cart</Button>
        <Button success onClick={()=>{console.log("Clicked on the Verify the OTP button")}}><BiAnalyse/>Verify the OTP</Button>
        <Button warning rounded onClick={()=>{console.log("Clicked on the Sign Out button")}}><BiArrowFromLeft/>Sign Out</Button>
        <Button danger rounded onClick={()=>{console.log("Clicked on the Cancel Subscription button")}}><AiFillWarning/>Cancel Subscription</Button>   
        </div>

    </div>
}

export default App;

/* DownDown Component COMPONENT */

const options = [{id:2, option:"Shirts"},{id:3, option:"Pants"},{id:4, option:"Shoes"},{id:5, option:"Hats"},{id:6, option:"Bags"},{id:7, option:"Watches"},{id:8, option:"Belts"}];

/* ACCORDION COMPONENT */
const rand = `The sun's golden rays danced upon the tranquil lake, painting the water in shimmering hues.
    A gentle breeze rustled through the trees, carrying with it the sweet scent of blooming flowers.
    The laughter of children echoed in the distance, filling the air with infectious joy.
    A lone wolf howled at the moon, its mournful cry piercing the silence of the night.
    The old oak tree stood tall and proud, its branches reaching towards the heavens.
    The aroma of freshly baked bread wafted from the cozy bakery, enticing passersby.
    Raindrops pitter-pattered on the rooftop, creating a soothing symphony of nature's percussion.
    A colorful butterfly fluttered by, its delicate wings captivating all who beheld its beauty.`;

    /* BUTTON COMPONENT */
const data = [{title:"Part 1", rand},{title:"Part 2", rand},{title:"Part 3", rand},{title:"Part 4", rand},{title:"Part 5", rand},{title:"Part 6", rand}];

