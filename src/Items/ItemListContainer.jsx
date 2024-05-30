import "./ItemListContainer.css"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const resultQuery = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection;
        getDocs(resultQuery).then(data => {
            if (data.size > 0) {
                setItems(data.docs.map(items => ({id:items.id, ...items.data()})))
                setLoading(false)
            } else {
                setItems([])
            }
        });
    }, [categoryId]);

    return (
        <div className="item-list-container">
            <h1>Bienvenidos a Art[Ivst], lo que buscas, lo tenemos!!</h1>
            {
                loading
                ?<div className="loading">Cargando...</div>
                :<ItemList items={items} />
            }
        </div>
    )
}

export default ItemListContainer;