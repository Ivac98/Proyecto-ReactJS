import './menu.css';
import Carrito from './assets/images/Carrito.png'


const MainMenu = () => {
    
    return (
        <div className="menu">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div>
                <img src={Carrito} alt="" />
                <span>0</span>
            </div>
        </div>
    );
}


export default MainMenu;