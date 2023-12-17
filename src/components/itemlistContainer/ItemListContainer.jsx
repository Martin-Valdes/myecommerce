import { useEffect, useState } from "react"
import dataProduct from "../utils/data"
import ItemList from "../itemList/ItemList"
import "./ItemListContainer.css"

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
        <div className="itemListCont">
            <ItemList products = {product}/>
        </div>
    )
}

export default ItemListContainer