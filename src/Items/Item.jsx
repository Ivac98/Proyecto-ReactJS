import { Link } from 'react-router-dom';
import './Item.css'


const Item = ({ items }) => {
    return (
        <div className="ItemCard">
            <h3 className="item-name">{items.name}</h3>
            <div className="item-details">
                <img src={items.image} alt={items.name} className="item-image"/>    
                <p>Precio: ${items.price}</p>
                <Link to={`/item/${items.id}`}>Ver Detalles</Link>
            </div>
        </div>
    )
}

export default Item;