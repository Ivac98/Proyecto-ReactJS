import './ItemCount.css'
import { Link } from "react-router-dom"
import { useState } from "react"

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState (1)
    const [itemStock, setItemStock] = useState(stock)
    const [visible, setVisible] = useState(true)

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
            setVisible(false)
        }
    }

    return (
        <div className="Count">
            <div className="SetToCart">
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <div className="AddToCart">
                {visible ? (itemStock >= 1 ? <button onClick={AddToCart} > Agregar al carrito </button> : <button>SIN STOCK</button>) : <Link to={"/cart"}>Terminar mi compra</Link>}
            </div>
        </div>
    )
}

export default ItemCount;