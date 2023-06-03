import Table from './Table'
import { useState } from 'react';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

function SortableTable({data,config,keyFN}){
    const [sortOrder, setSortOrder]= useState(null);
    const [sortBy, setSortBy]= useState(null);
    /*---------------------------*/
    const handleClick = (label)=>{
        if (sortBy && label !== sortBy){
            setSortOrder('asc');
            setSortBy(label);
        }
        if (sortOrder ===null){
            setSortOrder('asc');
            setSortBy(label);
        }else if (sortOrder==='asc'){
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc'){
            setSortOrder(null);
            setSortBy(null);
        }
    };
    /*-------- will divide the headings with sortable and icons and not-------------*/
    const updatedConfig= config.map((element)=>{
        if (!element.sortValue){
            return element;
        }

        return {
            ...element,
            header:()=> (<th className="cursor-pointer hover:bg-gray-100"
            onClick= {()=> handleClick(element.label)}>
                <div className='flex items-center'>
                    {getIcons(element.label, sortBy, sortOrder)}
                    {element.label}
                </div>
            </th>
            ),
        };
    });
    /*---------------------------*/
    let sortedData = data;
    if (sortOrder && sortBy) {
      const { sortValue } = config.find((column) => column.label === sortBy);
      sortedData = [...data].sort((a, b) => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);
  
        const reverseOrder = sortOrder === 'asc' ? 1 : -1;
  
        if (typeof valueA === 'string') {
          return valueA.localeCompare(valueB) * reverseOrder;
        } else {
          return (valueA - valueB) * reverseOrder;
        }
      });
    }
  
    return <Table {...data} data={sortedData} config={updatedConfig} keyFN={keyFN} />;
  }
  
  function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    }
  
    if (sortOrder === null) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    } else if (sortOrder === 'asc') {
      return (
        <div>
          <GoArrowSmallUp />
        </div>
      );
    } else if (sortOrder === 'desc') {
      return (
        <div>
          <GoArrowSmallDown />
        </div>
      );
    }
  }
  
  export default SortableTable;
  