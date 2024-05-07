import CartImage from '../assets/images/Carrito.png';
import './CartWidget.css';

const Cart = () => {
    return (
        <div className='cart'>
            <span>0</span>
            <img src={CartImage} alt="CartImage" className='CartImage'/>
        </div>
    )
};

export default Cart;