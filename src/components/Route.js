import useNavigation from "../hooks/use-navigation";

function Route({ path, children }) {
  const { Pathnow } = useNavigation();
  if (path === Pathnow) {
    return children;
  }
  return ;
}
export default Route;
