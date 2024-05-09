import ItemCount from './ItemCount';
import './ItemDetails.css'

const ItemDetails = ({image, name, price, stock, description}) => {
    return (
        <div className="ItemDetailBox">
            <div className="ItemDetailTop">
                <h3 className="ItemDetailName">{name}</h3>
            </div>
            <img src={image} alt={name} className="ItemDetailImage"/>
            <div className="ItemDetails">
                <h4>{description}</h4>
                <p>Precio: ${price}</p>
                <ItemCount initial={1} stock={stock} onAdd={(stock)}/>
                <span>Stock disponible: {stock}</span>
            </div>
        </div>
    )
}

export default ItemDetails;