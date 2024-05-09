import Item from "./Item";
import './ItemList.css'

const ItemList = ({ items }) => {
   return (
      <>
         <h2>--Tal vez te puedan interesar estos productos--</h2>
         <div className="item-list">
            {items.map(item => <Item key={item.id} items={item} {...item} />)}
         </div>
      </>
   )
}

export default ItemList;