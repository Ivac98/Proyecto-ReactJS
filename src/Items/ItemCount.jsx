import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState (initial)
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
    
    return (
        <div className="Count">
            <div className="SetToCart">
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <div className="AddToCart">
                <button onClick={() => onAdd(count)} disabled={!stock}> Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCount;