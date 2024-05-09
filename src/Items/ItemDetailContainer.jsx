import { useEffect, useState } from "react"
import { fetchItemsById } from "../../Products"
import ItemDetails from "./ItemDetails"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [item, setItems] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(() => {
        fetchItemsById(itemId)
            .then(data => {
                setItems(data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [itemId])
    return(
        <div className="item-detail-container">
            {
                loading
                ?<div>Cargando...</div>
                :<ItemDetails {...item}/>
            }
        </div>
    )

}

export default ItemDetailContainer;