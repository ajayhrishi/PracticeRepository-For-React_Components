import { useState, useRef, useEffect } from "react";
import { AiFillCaretDown, AiFillCaretRight} from "react-icons/ai";
import Panel from "./Panel";

function Dropdown({data,Display,InputHandler}){
    const [appear, view]= useState(false);
    const reference = useRef();
    let key = 0;

    const OptionsJSX = data.map((item)=>OptionMaker(item));

    /*--------------This code will help to figure out where the user clicked and based on that will close and open the option list -------*/
    useEffect(() => {
        const ClickDetect = (event) => {
          console.log("clickDetect function inside the use effect of Dropdown");
          if (reference.current && !reference.current.contains(event.target)) {  /* if (!reference.current.contains(event.target)). current.contains(event.target) will check if it's clicked on the reference(the main div of dropdown) or not.*/
            view(false); 
          }
          console.log("Finished click detect function in useffect of drop down");
        }
    
        document.addEventListener('click', ClickDetect, true);

        return () => {
          document.removeEventListener('click', ClickDetect);
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
    <Panel onClick={()=>{appear?view(false):view(true);}} className="flex justify-between items-center cursor-pointer"> {Display||"Select..."} {(appear)?<AiFillCaretDown/>:<AiFillCaretRight/>}</Panel>
    {appear&&(<Panel className="absolute top-full">{OptionsJSX}</Panel>)} 
    </div>
}



export default Dropdown;

