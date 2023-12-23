import { useEffect, useState } from "react"
import dataProduct from "../utils/data"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom"


import "./ItemListContainer.css"
const ItemListContainer = () =>{

const [product, setProduct] = useState([]);
const { categoria } = useParams()


console.log(categoria)
useEffect(()=>{

    dataProduct
    .then((respuesta)=>{
        if(categoria){
            const filterProduct = respuesta.filter((producto)=> producto.categoria === categoria)
            setProduct(filterProduct)
        }else{
            setProduct(respuesta);
        }
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Finalizo la promesa");
    });

},[categoria]);
    return(
        <div className="itemListCont">
            <ItemList products = {product}/>
        </div>
    )
}

export default ItemListContainer