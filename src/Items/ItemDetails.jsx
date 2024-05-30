import { useContext } from 'react';
import ItemCount from './ItemCount';
import './ItemDetails.css'
import { CartContext } from '../CartContext/CartContex';

const ItemDetails = ({ item }) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity)
    }

    return (
        <div className="ItemDetailBox">
            <div className="ItemDetailTop">
                <h3 className="ItemDetailName">{item.name}</h3>
            </div>
            <img src={item.image} alt={item.name} className="ItemDetailImage"/>
            <div className="ItemDetails">
                <h4>{item.description}</h4>
                <p>Precio: ${item.price}</p>
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
                <span>Stock disponible: {item.stock}</span>
            </div>
        </div>
    )
}

export default ItemDetails;