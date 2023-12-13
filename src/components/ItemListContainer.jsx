import { useEffect, useState } from "react"
import dataProduct from "./utils/data"


const ItemListContainer = ({prop}) =>{

const [product, setProduct] = useState([]);

useEffect(()=>{

    dataProduct
    .then((respuesta)=>{
        setProduct(respuesta);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Finalizo la promesa");
    });

},[]);
    return(
        <div>
            
        </div>
    )
}

export default ItemListContainer