import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

const Navigator= ({children}) => {
    const [Pathnow, updatePath] = useState(window.location.pathname); /*To capature the path and can be accessed this via any page, since it's within the context*/

        /*----------------------------------- */
    /*To listen to the forward and backward button on the browser and update the Pathnow Accordingly*/
    useEffect(()=>{  /*useEffect will work whenever the user use the popstate (the forward and backward buttons) */
    const handled = () =>{
        updatePath(window.location.pathname);

    };
    window.addEventListener('popstate',handled);
    return ()   =>{
        window.removeEventListener('popstate',handled);
    }; }, []);  

    /*----------------------------------- */
    /*navigate function will help us to navigate through the app without reloading the page. */

    const navigate = (to) =>{
        console.log('this is navigate function inside context, we received request to udpate the path to',
        to);
        window.history.pushState({},'',to);
        console.log('used the window.history.push state to change the location to', to);
        console.log('current location we can find using the window.location.pathname is ', window.location.pathname);
        updatePath(to);
        console.log('requested the state update to',to, 'as well, using the updatePath function inside context');
        console.log('----------');
    };

    /*---------------------------------- */

    return <NavigationContext.Provider value={{Pathnow,navigate}}>{Pathnow} <br/>
    {children}
    </NavigationContext.Provider>
}

export default Navigator; 
export {NavigationContext};