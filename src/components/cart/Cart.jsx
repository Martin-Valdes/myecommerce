import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import "./Cart.scss"

const Cart = () =>{
    const{cart, deleteCart, deleteArticle} = useContext(CartContext)
    return(

        <div className="cart">
            <ul className="ulCart">
                 {
                cart.map((producto) =>(
                    <li className="liCart" key={producto.id}>
                        <img src={producto.img} alt="" />
                        <p>ID: {producto.id}</p>
                        <p>Modelo: {producto.modelo}</p>
                        <p>Detalle: {producto.descripcion}</p>
                        <button onClick={() => deleteArticle(producto.id)}>Delete Product</button>
                    </li>
                ))
                }
            </ul>
           <button onClick={deleteCart}>Delete Cart</button>
        </div>
    )
}

export default Cart