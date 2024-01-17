import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.scss"

const Cart = () =>{
    const{cart, deleteCart, deleteArticle, costoTotal} = useContext(CartContext)

    if(cart.length === 0){
            return (
            <div className="emptyCart">
                <h3>El carrito esta vacio</h3>
                <Link to="/"><button>Home</button></Link>
            </div>
        )
    }

    return(

        <div className="cart">
            <ul className="ulCart">
                 {
                cart.map((producto) =>(
                    <li className="liCart" key={producto.id}>
                        <img src={producto.img} alt="" />
                        <p>Modelo: {producto.modelo}</p>
                        <p>Detalle: {producto.descripcion}</p>
                        <p>ID: {producto.id}</p>
                        <p>Cantidad:</p>
                        <button className="buttonDelete" onClick={() => deleteArticle(producto.id)}><img src="../../public/img/delete_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></button>
                    </li>
                ))
                }
            </ul>
            <h3>Precio total: $ {costoTotal()}</h3>
           <Link to="/checkout">
                Continuar mi compra
           </Link>
           <button onClick={deleteCart}>Delete Cart</button>
        </div>
    )
}

export default Cart