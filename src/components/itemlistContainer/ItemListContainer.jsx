import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import ItemList from "../itemList/ItemList"
import { PacmanLoader } from "react-spinners"
import { collection, getDocs, query, where } from "firebase/firestore" 
import db from "../../db/db"
import Carrousel from "../Carrousel/Carrousel"

import "./ItemListContainer.css"

const ItemListContainer = () =>{

const [product, setProduct] = useState([]);
const { categoria } = useParams();
const [loading, setLoading] = useState(true);


useEffect(()=>{
    setLoading(true)

    let check

    const productsRef = collection(db, "products")
    
    if(categoria){
        
        check = query(productsRef, where("categoria", "==", categoria))
    }else{
        check = productsRef
    }
    
    getDocs(check)
    
    .then((resp)=> {
        let productsDb = resp.docs.map((prod)=>{

            return  { id: prod.id, ...prod.data()};

        });
        setProduct(productsDb)
    })
    .catch((error)=> console.log(error))
    .finally(()=>setLoading(false))

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
           <div  className="itemListCont">
               {categoria && <h3  className="titleHome  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-900">{categoria.toUpperCase()}</h3>}
               
                <ItemList products = {product}/>
            </div>
            <Carrousel/>
        </div>
    )}
    </>
    )
}

export default ItemListContainer