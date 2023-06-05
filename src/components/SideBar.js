
import Link from './Link';
import useNavigation from '../hooks/use-navigation';
function SideBar({data}){
    const {Pathnow}=useNavigation();
    let Selected;
    const SideBarJSX = data.map((element)=> {
        if(element.path===Pathnow){
            Selected="font-bold pl-2 font-size: 0.875rem; border-l-4 border-blue-500 ";
        }
        else{
            Selected="hover:font-bold";
        }
        return <div className={Selected} key={element.path}> <Link to={element.path}>{element.lable}</Link> <br/></div>
    });
    return <div>
        {SideBarJSX}
    </div>
}
export default SideBar;

