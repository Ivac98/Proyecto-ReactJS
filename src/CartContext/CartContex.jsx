import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (AlreadyInCart(item.id)) {
            const product = cart.find(product => product.id === item.id);
            product.quantity += quantity;
            
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }   
    }

    const removeItem = (id) => {
        const items = cart.filter(item => item.id !== id);
        setCart([...items]);
    }
    
    const clear = () => {
        setCart([]);
    }

    const AlreadyInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const getTotalProducts = () => {
        return cart.reduce((acumulador, item) => acumulador += item.quantity, 0);
    }

    const getSumaProducts = () => {
        return cart.reduce((acumulador, item) => acumulador += item.price * item.quantity, 0);
    }

    return (
        <CartContext.Provider value ={{cart, addItem, removeItem, clear, getTotalProducts, getSumaProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;