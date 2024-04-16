import MainMenu from './MainMenu';
import Footer from './Footer';
import Imagen from './assets/images/Marca.png'


function App() {
    return (
        <body>
            <header className='navBar'>
                <div className='logoNav'>
                    <img src={Imagen} alt="" />
                    <h1>Art<span>[Ivst]</span></h1>
                </div>
                <MainMenu></MainMenu>
            </header>

            <main>
            </main>
    
            <Footer></Footer>
        </body>
    )
}


export default App