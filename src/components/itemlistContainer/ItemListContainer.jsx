import { useEffect, useState } from "react"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom"
import { PacmanLoader } from "react-spinners"
import { collection, getDocs, query, where } from "firebase/firestore" 
import db from "../../db/db"

import "./ItemListContainer.css"
const ItemListContainer = () =>{

const [product, setProduct] = useState([]);
const { categoria } = useParams();
const [loading, setLoading] = useState(true);
const [home, setHome] = useState(true);

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
                home ?(
                    <div className="divItem">
                    <div className="itemListCont">
                        <h3>Nuestros productos</h3>
                         <ItemList products = {product}/>
                     </div>
                </div>
                ):(
                    <div className="divItem">
                    <div className="itemListCont">
                        <h3>{categoria}</h3>
                         <ItemList products = {product}/>
                     </div>
                </div>
                )
            )}
        </>
    )
}

export default ItemListContainer