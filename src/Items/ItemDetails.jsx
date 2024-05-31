import { useContext } from 'react';
import ItemCount from './ItemCount';
import './ItemDetails.css'
import { CartContext } from '../CartContext/CartContex';
import { Link } from 'react-router-dom';

const ItemDetails = ({ item }) => {
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity)
    }

    return (
        <div>
            <div className="topDetailNav">
                <span><Link to={"/"}>Home </Link> / </span>
                <span><Link to={`/category/${item.category}`}>{item.category}</Link> / </span>
                <span><Link to={"/category/:categoryId"}>{item.name}</Link></span>
            </div>
            <div className="ItemDetailBox">
                <img src={item.image} alt={item.name} className="ItemDetailImage" />
                <div className="ItemDetails">
                    <div className="TopDetails">
                        <h3 className="ItemDetailName">{item.name}</h3>
                        <h4>{item.description}</h4>
                    </div>
                    <div className="BottonDetail">
                        <p>Precio: <b>${item.price}</b></p>
                        <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetails;