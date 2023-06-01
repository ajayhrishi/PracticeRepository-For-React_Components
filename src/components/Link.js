import classNames from 'classnames'

import { useContext } from "react";
import {NavigationContext} from "../context/NavigationContext";

function Link({to,children}){
    const {navigate, Pathnow} = useContext(NavigationContext);

    const classes = classNames('text-blue-500');

    const handleClick = (event) =>{
        if (event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        console.log('Clicked on link. Inside the Link Component now.')
        console.log('Current path stored in the state of context:', Pathnow , 'Requesting it to updated to ',to,' now');
        navigate(to);
        

    }

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;