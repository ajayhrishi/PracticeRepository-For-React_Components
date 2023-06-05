
import AccordionPage from "./AccordionPage";
import DropDownPage from "./DropDownPage";
import ButtonPage from './ButtonPage'
import ModalPage from "./ModalPage";
import TablePage from "./TablePage";
import CounterPage from "./CounterPage";

import Route from '../components/Route';
import SideBar from "../components/SideBar";

function App(){

    let ToSideBar =  [{lable:"AccordionPage", path:"/AccordionPage"},
    {lable:"DropDownPage", path:"/DropDownPage"}, {lable:"ButtonPage", path:"/ButtonPage"},
    {lable:"ModalPage", path:"/ModalPage"},{lable:"TablePage", path:"/TablePage"},
    {lable:"CounterPage", path:"/CounterPage"}];

    return <div className="container mx-auto grid-cols-6 grid mt-4">
    <div >
        <SideBar data={ToSideBar}/>
    </div>
    <div  className="col-span-5">
    <Route path={"/ButtonPage"}><ButtonPage/></Route>
    <Route path={"/DropDownPage"}><DropDownPage/></Route>
    <Route path={"/AccordionPage"}><AccordionPage/></Route>      
    <Route path={"/ModalPage"}><ModalPage/></Route>     
    <Route path={"/TablePage"}><TablePage/></Route>  
    <Route path={"/CounterPage"}><CounterPage/></Route>    
    </div> 

    </div>
}

export default App;



/*   <Link to={"/AccordionPage"}>Link to Accordion Page</Link> <br/>
    <Link to={"/DropDownPage"}>DropDownPage</Link> <br/>
    <Link to={"/ButtonPage"}>Link to ButtonPage </Link><br/>            
        
        */