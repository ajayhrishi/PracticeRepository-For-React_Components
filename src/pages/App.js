
import AccordionPage from "./AccordionPage";
import DropDownPage from "./DropDownPage";
import ButtonPage from './ButtonPage'

import Link from '../components/Link';
import Route from '../components/Route';

function App(){

    return <div >
    <Link to={"/AccordionPage"}>Link to Accordion Page</Link> <br/>
    <Link to={"/DropDownPage"}>DropDownPage</Link> <br/>
    <Link to={"/ButtonPage"}>Link to ButtonPage </Link><br/>

    <Route path={"/ButtonPage"}><ButtonPage/></Route>
    <Route path={"/DropDownPage"}><DropDownPage/></Route>
    <Route path={"/AccordionPage"}><AccordionPage/></Route>        
    </div>
}

export default App;



/*               
        
        */