import './ItemCount.css'
import { Link } from "react-router-dom"
import { useState } from "react"

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)
    const [itemStock, setItemStock] = useState(stock)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const AddToCart = () => {
        if (count <= itemStock) {
            setItemStock(itemStock - count)
            onAdd(count)
            setCount(1)
        }
    }

    return (
        <div className="Count">
            <div className="addCart"> 
                <div className="SetToCart">
                    {itemStock > 0 ? <button onClick={decrement}>-</button> : ""}
                    {itemStock > 0 ? <span>{count}</span> : ""}
                    {itemStock > 0 ? <button onClick={increment}>+</button> : ""}
                </div>
                <div className="AddToCart">
                    {(itemStock >= 1 ? <button onClick={AddToCart} > Agregar al carrito </button> : <button style={{cursor: 'default'}}>SIN STOCK</button>)}
                </div>
            </div>
            <Link to={"/cart"} className="endShop">Terminar mi compra</Link>
            <div>
                {itemStock > 10 ? <span>Stock Disponible: {itemStock}</span> : (itemStock > 0 ? <span>Poco Stock</span> : <span>Sin stock</span>)}
            </div>
        </div>
    )
}

export default ItemCount;