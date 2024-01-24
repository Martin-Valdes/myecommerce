import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db"
import Carrousel from "../Carrousel/Carrousel"

import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const [producto, setProtucto] = useState({})
    const {id} = useParams()
    const [productExist, setProductExist] = useState(false);

   

    useEffect(()=>{

        const productsRef = doc(db, "products", id)
        getDoc(productsRef)
        .then((respuesta)=>{
            const productDb ={id: respuesta.id, ...respuesta.data()}
            if (!respuesta.exists()){
                setProductExist(true)
            }
            setProtucto(productDb)
        })
    },[id])

    return(
        <div>
            <div className="detailContainer">
            {
                productExist ?(
                    <div>El producto no existe</div>
                ):(
                    <ItemDetail producto = {producto}/>
                )
            }
            
            </div>
            <Carrousel/>
        </div>
        
    )
}

export default  ItemDetailContainer