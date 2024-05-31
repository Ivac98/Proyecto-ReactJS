import './Checkout.css'
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContex";
import { useState, useContext } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import EmptyCart from "../assets/images/emptyCart.png"
import DoneCart from "../assets/images/shopping.png"

const Checkout = () => {
    const { cart, getSumaProducts, clear, getTotalProducts } = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [orderId, setOrderId] = useState("")
    const [nombreError, setNombreError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [direccionError, setDireccionError] = useState("")

    const OrderGen = () => {
        if (nombre == "") {
            setNombreError("Por favor, completa tu nombre!")
            return false;
        } else {
            setNombreError("")
        }
        if (email == "") {
            setEmailError("Por favor, completa tu email!")
            return false;
        } else {
            setEmailError("")
        }
        if (direccion == "") {
            setDireccionError("Por favor, completa tu direccion!")
            return false;
        } else {
            setDireccionError("")
        }
        const buyer = { name: nombre, email: email, telephone: telefono, address: direccion }
        const itemsBuyer = cart.map(item => ({ id: item.id, name: item.name, price: item.price, quantity: item.quantity }))
        const fecha = new Date();
        const date = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        const order = { buyer: buyer, items: itemsBuyer, date: date, total: getSumaProducts() }
        const db = getFirestore();
        const orderCollection = collection(db, "order")
        addDoc(orderCollection, order).then(data => {
            setOrderId(data.id)
            setNombre("")
            setEmail("")
            setTelefono("")
            setDireccion("")
            clear()
        })
    }

    
    if (orderId) {
        return (
            <div className="finishShoping">
                <div>
                    <img src={DoneCart} alt="" />
                    <p>¡Compra realizada!. Tu numero de compra es <b>{orderId}</b></p>
                    <span>Por favor, guarde este numero</span>
                    <button><Link to={"/"}>Volver al Menu Principal</Link></button>
                </div>
            </div>
        )
    }
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
        <div>
            <div className="checkout">
                <div className="columna1">
                    <form>
                        <div>
                            <label>Nombre*</label>
                            <input type="text" onInput={(event) => { setNombre(event.target.value) }} />
                            <div className="error">{nombreError}</div>
                        </div>
                        <div>
                            <label>Email*</label>
                            <input type="text" onInput={(event) => { setEmail(event.target.value) }} />
                            <div className="error">{emailError}</div>
                        </div>
                        <div>
                            <label>Telefono</label>
                            <input type="text" onInput={(event) => { setTelefono(event.target.value) }} />
                        </div>
                        <div>
                            <label>Dirección*</label>
                            <input type="text" onInput={(event) => { setDireccion(event.target.value) }} />
                            <div className="error">{direccionError}</div>
                        </div>
                        <span>*Campos obligatorios</span>
                    </form>
                    <div>
                        <button type="button" onClick={OrderGen}>Generar Orden</button>
                    </div>
                </div>
                <div className="columna2">
                    <div>
                        <tr className="checkProductsTop">
                            <p>Imagen</p>
                            <p>Nombre</p>
                            <p>Precio unitario</p>
                            <p>Cantidad</p>
                            <p>Precio total</p>
                        </tr>
                        {cart.map(item => (
                            <tr key={item.id} className="checkProducts">
                                <td><img src={item.image} alt={item.name} /></td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>x{item.quantity}</td>
                                <td>${item.quantity * item.price}</td>
                            </tr>
                        ))}
                    </div>
                    <div className="finalPrice">
                        <p>Precio Final:</p>
                        <p><b>${getSumaProducts()}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;