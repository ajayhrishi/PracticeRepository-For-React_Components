
import {useState} from 'react'
import { AiFillCaretRight,AiFillCaretDown } from "react-icons/ai";


function Accordion({data}){

    const [expanded,setExpanded]=useState(0);

    function updater(elementIndex){
        if(elementIndex===expanded){setExpanded(-1);}else{setExpanded(elementIndex);}
    };
    let icon;


    const dataInJSX = data.map((element)=>{
        const isExpanded = data.indexOf(element) === expanded;

        if(isExpanded) {icon= <AiFillCaretDown/>;} else {icon=<AiFillCaretRight/>;}
        return<div key={data.indexOf(element)} className="border rounded">

        <div className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between" onClick={()=>updater(data.indexOf(element))}>{element.title}{icon}</div>
        {isExpanded&&<div className='border-b p-5'>{element.rand}</div>}
        </div>
    });
    
    return <div className='border-x border-t rounded'>{dataInJSX}</div>
}

export default Accordion;