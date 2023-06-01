import { useContext } from 'react';
import {NavigationContext} from '../context/NavigationContext';

function Route({ path, children }) {
    console.log('------ Route Component for ',path,' ----------')
  const { Pathnow } = useContext(NavigationContext);

  if (path === Pathnow) {
    console.log('Returning ',path, 'now');
    return children;
  }
  console.log('path===Pathnow is false, returns nothing..</div>');

  return ;
}

export default Route;
