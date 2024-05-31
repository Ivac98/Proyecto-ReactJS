import "./Cart.css"
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContex"
import { Link } from "react-router-dom"
import EmptyCart from "../assets/images/emptyCart.png"

const Cart = () => {
    const { cart, getTotalProducts, getSumaProducts, removeItem, clear } = useContext(CartContext)

    if (getTotalProducts() == 0) {
        return (
            <div className="emptyCart">
                <img src={EmptyCart} alt="" />
                <h3>¡¡Tu Carrito esta <p>Vacio</p>!!</h3>
                <h4>Visita la tienda para comenzar a buscar productos</h4>
                <button><Link to="/">VOLVER A LA TIENDA</Link></button>
            </div>
        )
    }

    return (
        <table className="prevCheckout">
            <tbody>
                <tr className="deleteCart">
                    <td><button onClick={clear}>Vaciar Carrito</button></td>
                </tr>
                <tr className="productsCartTop">
                    <p>Imagen</p>
                    <p>Nombre</p>
                    <p>Precio unitario</p>
                    <p>Cantidad</p>
                    <p>Precio total</p>
                </tr>
                {cart.map(item => (
                    <tr key={item.id} className="productsCart">
                        <td><img src={item.image} alt={item.name} /></td>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>x{item.quantity}</td>
                        <td>Total: ${item.quantity * item.price}</td>
                        <td>
                            <button onClick={() => { removeItem(item.id) }} title="Eliminar producto">Borrar Todo</button>
                        </td>
                    </tr>
                ))}
                <tr className="priceCart">
                    <td>Total: ${getSumaProducts()}</td>
                    <td><Link to={"/checkout"}>Continuar</Link></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Cart