import { useEffect } from "react"
import { useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db"

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [producto, setProtucto] = useState({})
    const {id} = useParams()
    
    useEffect(()=>{

        const productsRef = doc(db, "products", id)

        getDoc(productsRef)

        .then((respuesta)=>{
            const productDb ={id: respuesta.id, ...respuesta.data()}
            setProtucto(productDb)
        })
    },[id])

    return(

        <div className="detailContainer">
            <ItemDetail producto = {producto}/>
        </div>
    )
}

export default  ItemDetailContainer