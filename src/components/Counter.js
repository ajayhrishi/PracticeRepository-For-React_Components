import { useState } from "react";

function Counter(){
const [count, setCount]=  useState(0);
    const setToZero = ()=>setCount(0);

    const increase = ()=>{setCount(count+1);}
    const decrease = ()=>{setCount(count-1);}

    const prop = {count, setCount,setToZero,increase,decrease};
    return prop;
}


export default Counter;