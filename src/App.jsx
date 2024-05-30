import Cart from './Cart/Cart';
import NavBar from './NavBar/NavBar';
import Checkout from './Checkout/Checkout';
import NotFound from './NotFound/NotFound';
import ItemListContainer from './Items/ItemListContainer';
import ItemDetailContainer from './Items/ItemDetailContainer';
import CartContextProvider from './CartContext/CartContex';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer />} />
                        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                        <Route exact path="/checkout" element={<Checkout />} />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </>
    )
}

export default App;