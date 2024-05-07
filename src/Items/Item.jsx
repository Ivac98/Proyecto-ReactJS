import { Link } from 'react-router-dom';
import './Item.css'


const Item = ({ item }) => {
    return (
        <Link to='{item.id}' className="item-card">
            <h2>//// {item.category} ////</h2>
            <img src={item.imageUrl} alt={item.name} className="item-image"/>
            <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p>Precio: ${item.price}</p>
                <p>Stock disponible: {item.stock}</p>
            </div>
        </Link>
    )
}

export default Item;