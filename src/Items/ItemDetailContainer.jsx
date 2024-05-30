import './ItemDetailContainer.css'
import ItemDetails from "./ItemDetails"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        console.log({docRef});
        getDoc(docRef).then(data => {
            if (data.exists()) {
                setItem({id:data.id, ...data.data()});
                setLoading(false);
            } else {
                setItem({});
            }
        });
    }, [id]);

    return(
        <div className="item-detail-container">
            {
                loading
                ?<div className="loading">Cargando...</div>
                :<ItemDetails item={item}/>
            }
        </div>
    )

}

export default ItemDetailContainer;