import './NavBar.css'
import Logo from '../assets/images/Marca.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='Logo'>
                <Link to="/"><img src={Logo} alt="LogoArtIvst" /></Link>
                <Link to="/"><h1>Art<span>[Ivst]</span></h1></Link>
            </div>
            <div className='nav'>
                <ul className='links'>
                    <div className='Home'>
                        <li><Link to="/">Home</Link></li>
                    </div>
                    <div className='Category'>
                        <button>
                            <li><Link to="/">Categorias</Link></li>
                            <div className='SubCategory'>
                                <li><Link to="/category/remeras">Remeras</Link></li>
                                <li><Link to="/category/pantalones">Pantalones</Link></li>
                                <li><Link to="/category/calzados">Calzados</Link></li>
                            </div>
                        </button>
                    </div>
                    <div className='Cart'>
                        <li><Link to="/cart">Carrito</Link></li>
                    </div>
                </ul>
                <CartWidget></CartWidget>
            </div>
        </div>
    )
}

export default NavBar;