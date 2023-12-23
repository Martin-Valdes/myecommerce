import { useEffect } from "react"
import { useState } from "react"
import dataProduct from "../utils/data"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

    const [producto, setProtucto] = useState([])

    useEffect(()=>{

        dataProduct
        .then((respuesta)=>{
            const productoEncontrado = respuesta.find((prod)=> prod.id === "jjddu296")
            setProtucto(productoEncontrado)
        })
    },[])

    return(

        <div>
            <ItemDetail producto = {producto}/>
        </div>
    )
}

export default  ItemDetailContainer