function Table({data,titles}){

    const JSXtitles= titles.map((element)=>{ return <th key={element.label}>{element.label}</th>});

    const data1 = data.map((element)=>{return   <tr className="border-b">
                                                    <td className="p-3"> {element.Name}  </td>
                                                    <td className={`p-3`}> <div className={`p-3 m-2 ${element.Color}`}></div> </td>
                                                    <td className="p-3"> {element.Score} </td>
                                                 </tr>});
    return <table className="table-auto border-spacing-2">
        <thead><tr>
                {[...JSXtitles]}
            </tr>
        </thead>
        <tbody className="border-b-2">
            {data1}

        </tbody>
    </table>
}

export default Table;