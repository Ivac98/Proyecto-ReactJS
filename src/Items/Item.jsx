import { Link } from 'react-router-dom';
import './Item.css'


const Item = ({id, image, name, price}) => {
    return (
        <div className="ItemCard">
            <img src={image} alt={name} className="item-image"/>
            <div className="item-details">
                <h3 className="item-name">{name}</h3>
                <p>Precio: ${price}</p>
                <Link to={`/item/${id}`}>Ver Detalles</Link>
            </div>
        </div>
    )
}

export default Item;