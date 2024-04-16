import './menu.css';
import Imagen from './assets/images/Marca.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="f-logo">
                <img src={Imagen} alt="Logo Marca"/>
            </div>
            <div className="nav-f">
                <div className="nav-f_arriba">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                    </ul>
                </div>
                <div className="nav-f_abajo">
                    <ul>
                        <li><a href="#">Acerca De</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
            </div>
            <div className="f-logo2">
                <img src={Imagen} alt="Logo Marca"/>
            </div>
        </div>
    );
}


export default Footer;