import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    imageUrl: "https://picsum.photos/200",
                    name: 'Jean Azul Vermunt',
                    price: 12000,
                    description: "Jean Azul de excelente calidad. 90% fibra de carbono, 15% jean",
                    category: "Pantalones",
                    stock: 14
                },
                {
                    id: 2,
                    imageUrl: "https://picsum.photos/200",
                    name: 'Chomba Penguin Rosa Salmon',
                    price: 35000,
                    description: "Remerita top, para gente top. 100% plastico",
                    category: "Remeras",
                    stock: 20
                },
                {
                    id: 3,
                    imageUrl: "https://picsum.photos/200",
                    name: 'Nike Adidas Original',
                    price: 80000,
                    description: "Para que elegir Nike o Adidas, si se puede tener ambas. Original importadas con caja sellada",
                    category: "Calzados",
                    stock: 8
                },
            ])
        }, 1000)
    })
}

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchItems();
            setItems(data);
            setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <div className="item-list-container">
            <h1>Bienvenidos a Art[Ivst], lo que buscas, lo tenemos!!</h1>
            {
                loading
                    ? <div>Cargando...</div>
                    : <ItemList items={items} />
            }
        </div>
    )
}

export default ItemListContainer;