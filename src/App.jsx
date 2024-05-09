import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './Items/ItemListContainer';
import CartList from './Cart/Cart';
import NotFound from './NotFound';
import ItemDetailContainer from './Items/ItemDetailContainer';

function App() {
    return (
        <>  
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<CartList/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            
        </>
    )
}

export default App;