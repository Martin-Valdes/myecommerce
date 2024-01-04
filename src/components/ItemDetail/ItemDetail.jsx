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

        <div className="detailItem">
            <img src={producto.img} alt="" />
            <p>Modelo: {producto.modelo}</p>
            <p>Descripcion: {producto.descripcion}</p>
            <p>Stock disponible: {producto.stock}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>Costo: ${producto.precio}</p>
            {toggle ? (
                <Link to= "/cart"><button>Terminar mi compra</button></Link>
            ):(
                <ItemCount stock ={producto.stock} onAdd={onAdd} />
            )
            }
            
        </div>
       
    )
}

export default ItemDetail 