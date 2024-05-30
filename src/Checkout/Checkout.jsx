import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContex";
import { useState, useContext } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore";

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
            <div>
                <div>
                    <p>¡Compra realizada!. Tu numero de compra es <b>{orderId}</b></p>
                </div>
            </div>
        )
    }
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
                <div className="columna1">
                    <form>
                        <div>
                            <label>Nombre*</label>
                            <input type="text" onInput={(event) => { setNombre(event.target.value) }} />
                            <div>{nombreError}</div>
                        </div>
                        <div>
                            <label>Email*</label>
                            <input type="text" onInput={(event) => { setEmail(event.target.value) }} />
                            <div>{emailError}</div>
                        </div>
                        <div>
                            <label>Telefono</label>
                            <input type="text" onInput={(event) => { setTelefono(event.target.value) }} />
                        </div>
                        <div>
                            <label>Dirección*</label>
                            <input type="text" onInput={(event) => { setDireccion(event.target.value) }} />
                            <div>{direccionError}</div>
                        </div>
                        <span>*Campos obligatorios</span>
                        <div>
                            <button type="button" onClick={OrderGen}>Generar Orden</button>
                        </div>
                    </form>
                </div>
                <div className="columna2">
                    {
                        <div>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>x{item.quantity}</td>
                                    <td>{item.quantity * item.price}</td>
                                </tr>
                            ))}
                            <div>
                                <p>Precio Final</p>
                                <p><b>${getSumaProducts()}</b></p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Checkout;