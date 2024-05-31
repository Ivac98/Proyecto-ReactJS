import './CartWidget.css';
import CartImage from '../assets/images/Carrito.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContex';

const CartWidget = () => {
    const { getTotalProducts } = useContext(CartContext);

        return (
            <Link to="/cart">
                <button className='cart'>
                    <span>{getTotalProducts()}</span>
                    <img src={CartImage} alt="CartImage" className='CartImage' />
                </button>
            </Link>
        )
};

export default CartWidget;