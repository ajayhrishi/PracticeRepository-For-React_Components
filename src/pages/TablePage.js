import SortableTable from "../components/SortableTable";

function TablePage(){

    const items = [{Name: "JackFroot", Color:"bg-green-700" , Score: 10,},
    {Name: "Banana", Color:"bg-yellow-400" , Score: 5,},
    {Name: "Orange", Color:"bg-orange-500" , Score: 4,},
    {Name: "Mango", Color:"bg-amber-500" , Score: 5.5,},
    {Name: "Berries", Color:"bg-red-400	" , Score: 3,},
    {Name: "WaterMelon", Color:"bg-emerald-700" , Score: 6,}];

    const itemsConfig = [{label:"Name", render: (item)=>item.Name,sortValue:(item)=>item.Name},
                        {label:"Color", render: (item)=><div className={`p-2 m-2 ${item.Color}`}></div>},
                        {label:"Points", render: (item)=>item.Score,sortValue:(item)=>item.Points},];

    const keyFN = (element) =>{return element.name};


    return <SortableTable data={items} config={itemsConfig} keyFN={keyFN}/>;
}

export default TablePage;