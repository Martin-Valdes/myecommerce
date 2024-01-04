import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () =>{
    const{cart, deleteCart, deleteArticle} = useContext(CartContext)
    return(

        <div>
            <ul>
                 {
                cart.map((producto) =>(
                    <li key={producto.id}>
                        <img src={producto.img} alt="" />
                        <p>{producto.id}</p>
                        <p>{producto.modelo}</p>
                        <p>{producto.descripcion}</p>
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