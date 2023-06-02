import classNames from 'classnames'

import useNavigation from "../hooks/use-navigation";

function Link({to,children}){
    const {navigate, Pathnow} = useNavigation();

    const classes = classNames('text-blue-500', 'mb-3');

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