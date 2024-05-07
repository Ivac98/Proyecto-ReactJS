import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './Items/ItemListContainer';
import CartList from './Cart/Cart';
import Calzados from './Items/Categories/Calzados';
import Remeras from './Items/Categories/Remeras';
import Pantalones from './Items/Categories/Pantalones';


function App() {
    return (
        <>  
            <NavBar />
            <Routes>
                <Route exact path="/" element={<ItemListContainer/>} />
                <Route exact path="/cart" element={<CartList/>} />
                <Route exact path="/category/remeras" element={<Remeras/>} />
                <Route exact path="/category/pantalones" element={<Pantalones/>} />
                <Route exact path="/category/calzados" element={<Calzados/>} />
            </Routes>
        </>
    )
}


export default App;