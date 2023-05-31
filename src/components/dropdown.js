import { useState, useRef, useEffect } from "react";
import className from 'classnames'

import { AiFillCaretDown, AiFillCaretRight} from "react-icons/ai";

function Dropdown({data,Display,InputHandler}){
    const [appear, view]= useState(false);
    const reference = useRef();
    let key = 0;

    const OptionsJSX = data.map((item)=>OptionMaker(item));

    /*--------------This code will help to figure out where the user clicked and based on that will close and open the option list -------*/
    useEffect(() => {
        const handler = (event) => {
          if (!reference.current.contains(event.target)) {
            view(false);
          }
        };
    
        document.addEventListener('click', handler, true);
    
        return () => {
          document.removeEventListener('click', handler);
        };
      }, []);
    /*------------------------------------------------------------*/

    function OptionMaker(item){

        return (
            <div key={key++} className="hover:bg-sky-100 rounded cursor-pointer p-1"> 
                <div onClick={()=>{InputHandler(item.option); view(false);}}  >{item.option}</div>
            </div>
        );
    }
    
    

    return <div className="w-48 relative" ref={reference}>
    <div onClick={()=>{appear?view(false):view(true);}} className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"> {Display||"Select..."} {(appear)?<AiFillCaretDown/>:<AiFillCaretRight/>}</div>
    {appear&&(<div className="absolute top-full border rounded p-3 shadow bg-white w-full">{OptionsJSX}</div>)} 
    </div>
}




export default Dropdown;

