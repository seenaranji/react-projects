import React from 'react'
import Menu from './Menu'
import data from './data'
import { useState } from 'react';
import Categories from './Categories';

const Parent = () => {
    const allCategories = [
        "all",
        ...new Set(data.map((datum) => datum.category)),
      ];
      const [categoriesAll, setNewCategory] = useState(allCategories);
      const [items, setItems]=useState(data)
      const filterItems=(category)=>{
        if(category==='all'){
            setItems(items)
        }
        else{
            let filteredItems=data.filter(item=>item.category===category)
            setItems(filteredItems)
        }
      }
      console.log({items})

  return (
    <div className="menu section">
      <Categories categoriesAll={categoriesAll} filterItems={filterItems}/>
      <Menu data={items}/>
    </div>
  )
}

export default Parent
