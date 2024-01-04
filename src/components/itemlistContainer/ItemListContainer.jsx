import { useEffect, useState } from "react"
import dataProduct from "../utils/data"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom"
import { PacmanLoader } from "react-spinners"

import "./ItemListContainer.css"
const ItemListContainer = () =>{

const [product, setProduct] = useState([]);
const { categoria } = useParams()
const [loading, setLoading] = useState(true)

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
        setLoading(false)
    });

},[categoria]);

    return(
        <>
            
            {
            loading ? (
                <div className="loading">
                    <PacmanLoader color="rgba(54, 55, 214, 1)" size={40}/>
                </div>
                

            ) : (   
                
                <div className="divItem">
                    <div className="itemListCont">
                         <ItemList products = {product}/>
                     </div>
                </div>
            )}
        </>
    )
}

export default ItemListContainer