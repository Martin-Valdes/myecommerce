import "./ItemDetail.css"
import ItemCount from"../itemcount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({producto}) => {

    const [toggle, settoggle] = useState(false);
    const {addProduct} = useContext(CartContext)

    const onAdd = (count) =>{
        
        const newProduct = {...producto, cantidad:count}
        addProduct(newProduct)
        settoggle(true)
    }
    
    return (

        <div className="contItemDetail">
            <div className="detailItem">
                <img className="imgDetail" src={producto.img} alt="" />
                <div className="infoDetail">
                    <p>Modelo: {producto.modelo}</p>
                    <p>Descripcion: {producto.descripcion}</p>
                    <p>Stock disponible: {producto.stock}</p>
                    <p>Categoria: {producto.categoria}</p>
                    <p>Costo: $ {producto.precio}</p>
                </div>
            </div>
            <div className="buttonCartAdd">
                {toggle ? (
                <Link to= "/cart"><button className="saleFinish"><b>Terminar mi compra</b></button></Link>
                ):(
                    <ItemCount stock ={producto.stock} onAdd={onAdd} />
                )
                }
            </div>
        </div>
       
    )
}

export default ItemDetail 