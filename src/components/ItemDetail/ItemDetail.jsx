import ItemCount from"../itemcount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import "./ItemDetail.css"

const ItemDetail = ({producto}) => {

    const [toggle, settoggle] = useState(false);
    const {addProduct, allArticle} = useContext(CartContext);

    const onAdd = (count) =>{
        
        const newProduct = {...producto, cantidad:count}
        addProduct(newProduct)
        
        settoggle(true)
    }
    
    return (

        <div className="contItemDetail">
            <h3 className="titleDetail  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-900">Detalles del producto</h3>
            <div className="detailItem">
                <img className="imgDetail" src={producto.img} alt="" />
                <div className="infoDetail">
                    <p>Modelo: {producto.modelo}</p>
                    <p>Descripcion: {producto.descripcion}</p>
                    <p>Stock disponible: {producto.stock}</p>
                    <p>Categoria: {producto.categoria}</p>
                    <p>Costo: $ {producto.precio}</p>
                    
                
            <div className="buttonCartAdd">
                
                {toggle ? (
                    
                    <div className="buttonFinish">
                        
                        <Link to= "/cart"><button className="saleFinish" >Terminar mi compra</button></Link>
                        <Link to= "/"><button className="saleFinish">Seguir comprando</button></Link>
                    </div>
                ):(
                    <ItemCount stock ={producto.stock} onAdd={onAdd} />
                )
                }</div>
            </div>
            </div>
        </div>
       
    )
}

export default ItemDetail 