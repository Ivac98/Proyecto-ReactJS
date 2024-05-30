import { useContext } from "react"
import { CartContext } from "../CartContext/CartContex"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, getTotalProducts, getSumaProducts, removeItem, clear } = useContext(CartContext)

    if (getTotalProducts() == 0) {
        return (
            <div>
                <h3>Carrito vacio</h3>
                <h4>Visita la tienda para comenzar a llenar el carrito</h4>
                <button><Link to="/">Tienda Principal</Link></button>
            </div>
        )
    }

    return (
        <div>
            <div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td><button onClick={clear}>Vaciar Carrito</button></td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>x{item.quantity}</td>
                                    <td>{item.quantity * item.price}</td>
                                    <td><button onClick={() => { removeItem(item.id) }} title="Eliminar producto">Borrar</button></td>
                                </tr>
                            ))}
                            <tr>
                                <td>Total: ${getSumaProducts()}</td>
                                <td><Link to={"/checkout"}>Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart