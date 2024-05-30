import { Link } from 'react-router-dom';
import './Item.css'


const Item = ({ items }) => {
    return (
        <div className="ItemCard">
            <img src={items.image} alt={items.name} className="item-image"/>
            <div className="item-details">
                <h3 className="item-name">{items.name}</h3>
                <p>Precio: ${items.price}</p>
                <Link to={`/item/${items.id}`}>Ver Detalles</Link>
            </div>
        </div>
    )
}

export default Item;