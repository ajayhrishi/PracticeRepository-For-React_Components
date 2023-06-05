import Counter from "../components/Counter"
import Button from "../components/Button";
import { useState } from "react";
import { BsFillCaretDownFill,BsFillCaretUpFill,BsCheck2,BsFillPlusSquareFill,BsFillFileMinusFill } from "react-icons/bs";


/*Need to find the issue with this code.  */

function CounterPage(){
    const {count, setCount,increase, decrease} = Counter();
    const [c, setC] = useState(0);   // to capture the value in the input box on real time based on the change. 

    /*------------------------------------------*/
    const handleAutoRefresh = (event)=>{
        event.preventDefault();
    }
    /*------------------------------------------*/
    const handleChange = (event)=>{
        setC(event.target.value);

    }
    /*------------------------------------------*/
    const handleAddition  = ()=>{
            setCount(count+Number(c));
        }
    
    /*------------------------------------------*/
    const handleSubtraction  = ()=>{
            setCount(count-Number(c))}  /*the value we recieve from the input box will be always in the string data type, to add it as a number we need to update it 
                                            that's why we have mentioned the Number(c)*/

    /*------------------------------------------*/
    const CounterUI = <div className="bg-slate-600 border rounded drop-shadow-2xl p-8">

        <p className="text-white text-center font-bold text-4xl m-4 mb-8">Counter</p>

         <div className="flex justify-center">
        <div className="text-white text-center font-bold text-2xl w-40 border">{count}</div>
        <div className="flex flex-col " >
        <div className={"border text-white text-center	"} onClick={()=>increase()}> <BsFillCaretUpFill/> </div>
        <div className={"border text-white text-center	"} onClick={()=>decrease()}> <BsFillCaretDownFill/> </div>
        </div></div>   

        <div className = "flex justify-center ">
        <form onClick={handleAutoRefresh}>
        <div className="flex justify-center">
        <input className={"w-16 m-4 mb-0 justify-center"} onChange={handleChange}></input> 
        </div>


        <div className="justify-center ml-4">
        <div className={"flex w-16 border justify-center p-1 text-white"} onClick={()=>{setCount(Number(c))}}><BsCheck2/></div>
        <div className=" flex flex-row ">
        <div className={"flex border text-white text-center w-8 h-6 justify-center p-1"} onClick={handleAddition}> <BsFillPlusSquareFill/></div>
        <div className={"flex border text-white text-center w-8 h-6 justify-center p-1"} onClick={handleSubtraction}><BsFillFileMinusFill /></div>
        </div>

        </div>
        </form>
        </div>

    </div>
    /*------------------------------------------*/

    return <div> 
        {CounterUI}
    </div>
}

export default CounterPage;