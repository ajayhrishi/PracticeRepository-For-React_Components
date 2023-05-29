import Button from './components/Button'
import { DiCoda } from "react-icons/di";
import { AiFillWarning } from "react-icons/ai";
import { BiCartAlt,BiAnalyse,BiRupee,BiArrowFromLeft } from "react-icons/bi";

function App(){

    return <div>
        <Button > <DiCoda/>Normal Button</Button>
        <Button primary rounded><BiRupee/>Buy Now</Button>
        <Button secondary rounded><BiCartAlt/>Add to cart</Button>
        <Button success ><BiAnalyse/>Verify the OTP</Button>
        <Button warning rounded><BiArrowFromLeft/>Sign Out</Button>
        <Button danger rounded><AiFillWarning/>Cancel Subscription</Button>   
    </div>
}

export default App;