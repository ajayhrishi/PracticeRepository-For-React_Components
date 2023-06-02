
import Table from "../components/Table";

function TablePage(){

    const items = [{Name: "JackFroot", Color:"bg-green-950" , Score: 10,},
    {Name: "Banana", Color:"bg-yellow-400" , Score: 5,},
    {Name: "Orange", Color:"bg-orange-500" , Score: 4,},
    {Name: "Manago", Color:"bg-amber-500" , Score: 5.5,},
    {Name: "Berries", Color:"bg-red-400	" , Score: 3,},
    {Name: "WaterMelon", Color:"bg-emerald-900" , Score: 6,}];

    const headers = [{label:"Name"},{label:"Color"},{label:"Points"}];

    return <Table data={items} titles={headers}/>;
}

export default TablePage;