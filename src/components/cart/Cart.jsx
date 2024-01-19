import { useContext } from "react"

import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

import "./Cart.scss"

const Cart = () =>{
    const{cart, deleteArticle, costoTotal} = useContext(CartContext)

    if(cart.length === 0){
            return (
            <div className="emptyCart">
                <h3 className="titleCartEmty">El carrito esta vacio</h3>
                <img src="../../img/carrito-vacio.webp" alt="imagen carrito vacio" />
                <Link to="/"><button className="buttonHome">Home</button></Link>
            </div>
        )
    }

    return(

        <div className="cart">
            <h2 className="titleCartAdd">Producto agregado con exito</h2>
            <section className="cartResume">
                <ul className="ulCart">
                    {
                    cart.map((producto) =>(
                        <li className="liCart" key={producto.id}>
                            <img src={producto.img} alt="" />
                            <p>Modelo: {producto.modelo}</p>
                            <p>Detalle: {producto.descripcion}</p>
                            <p>ID: {producto.id}</p>
                            <p>Cantidad:{producto.cantidad}</p>
                            <button className="buttonDelete" onClick={() => deleteArticle(producto.id)}><img src="../../img/delete_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></button>
                        </li>
                    ))
                    }
                </ul>
                <section className="infoButton">
                    <h3>Precio total: $ {costoTotal()}</h3>
                    <Link to="/checkout">
                        <button className="continueSale">Confirmar compra</button>
                    </Link>
                </section>
            </section>
        </div>
    )
}

export default Cart