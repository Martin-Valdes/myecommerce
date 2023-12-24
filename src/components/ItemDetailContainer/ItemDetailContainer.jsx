import { useEffect } from "react"
import { useState } from "react"
import dataProduct from "../utils/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [producto, setProtucto] = useState({})
    const {id} = useParams()
    
    useEffect(()=>{

        dataProduct
        .then((respuesta)=>{
            const productoEncontrado = respuesta.find((prod)=> prod.id === id)
            setProtucto(productoEncontrado)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return(

        <div className="detailContainer">
            <h1>Detalles del producto</h1>
            <ItemDetail producto = {producto}/>
        </div>
    )
}

export default  ItemDetailContainer