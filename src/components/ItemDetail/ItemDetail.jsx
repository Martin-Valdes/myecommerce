import { useState,useContext } from "react"

import { Link } from "react-router-dom"
import ItemCount from"../itemcount/ItemCount"
import { CartContext } from "../../context/CartContext"

import "./ItemDetail.css"

const ItemDetail = ({producto}) => {

    const [toggle, settoggle] = useState(false);
    const {addProduct} = useContext(CartContext);
   
    const onAdd = (count) =>{
         
        const newProduct = {...producto, cantidad:count}
        addProduct(newProduct)
        
        settoggle(true)
    }
    
    return (

        <div className="contItemDetail">
            <h3 className="titleDetail  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-900">{producto.modelo}</h3>
            <div className="detailItem">
                <img className="imgDetail" src={producto.img} alt="" />
                <div className="infoDetail">
                    <li><b>Descripcion:</b> {producto.descripcion}</li>
                    <li><b>Stock disponible:</b> {producto.stock}</li>
                    <li><b>Categoria:</b> {producto.categoria}</li>
                    <li><b>Costo: $</b> {producto.precio}</li>
                </div>
                <div className="buttonCartAdd">
                    {toggle ? (
                        <div className="buttonFinish">
                            <Link to= "/cart"><button className="saleFinish" >Terminar mi compra</button></Link>
                            <Link to= "/"><button className="saleFinish">Seguir comprando</button></Link>
                        </div>
                    ):(
                        <ItemCount stock ={producto.stock} onAdd={onAdd} />
                    )}
                </div>
            </div>
        </div>
       
    )
}

export default ItemDetail 