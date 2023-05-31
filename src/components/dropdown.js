import { useState } from "react";

import { AiFillCaretDown, AiFillCaretRight} from "react-icons/ai";

function Dropdown({data,Display,InputHandler}){
    const [appear, view]= useState(false);
    let key = 0;

    const OptionsJSX = data.map((item)=>OptionMaker(item));


    function OptionMaker(item){

        return (
            <div key={key++} className="hover:bg-sky-100 rounded cursor-pointer p-1"> 
                <div onClick={()=>{InputHandler(item.option); view(false);}}  >{item.option}</div>
            </div>
        );
    }
    
    

    return <div className="w-48 relative">
    <div onClick={()=>{appear?view(false):view(true);}} className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"> {Display||"Select..."} {(appear)?<AiFillCaretDown/>:<AiFillCaretRight/>}</div>
    {appear&&(<div className="absolute top-full border rounded p-3 shadow bg-white w-full">{OptionsJSX}</div>)} 
    </div>
}

export default Dropdown;

