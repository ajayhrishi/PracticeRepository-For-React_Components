import { DiCoda } from "react-icons/di";
import { AiFillWarning } from "react-icons/ai";
import { BiCartAlt,BiAnalyse,BiRupee,BiArrowFromLeft } from "react-icons/bi";

import Button from '../components/Button'

function ButtonPage(){

    return <div >

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

export default ButtonPage;



