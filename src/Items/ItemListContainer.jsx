import { useEffect, useState } from "react"
import { fetchItems, fetchItemsByCategory } from "../../Products"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    
    useEffect(() => {
        const asyncFunc = categoryId ? fetchItemsByCategory : fetchItems

        asyncFunc(categoryId)
            .then(data => {
                setItems(data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
        }, [categoryId])
        
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