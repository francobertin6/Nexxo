// import react
import { useState } from 'react'

// import Item
import Item from '../Item/Item'


const ItemList = ({items}) => {

    const [Category, setCategory] = useState("");

    const category_value = (value) => {
        setCategory(value)
    }

   return(
       <article id='item_container'>

           <div className='category'>
                <h1 >{Category}</h1>
           </div>
            
           {items.map(element => {
                return(
                    <Item items={element} category_value={category_value}/>        
                )
        })}
       
       </article>
   )
}

export default ItemList;