import { useContext } from "react"

import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

import "./Cart.scss"

const Cart = () =>{
    const{cart, deleteCart, deleteArticle, costoTotal} = useContext(CartContext)

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
                <div className="ulCart">
                    {
                    cart.map((producto) =>(
                        <ul className="liCart" key={producto.id}>
                            <img className="imgProduct" src={producto.img} alt={producto.modelo} />
                            <li>Modelo: {producto.modelo}</li>
                            <li>Detalle: {producto.descripcion}</li>
                            <li>ID: {producto.id}</li>
                            <li>Cantidad:{producto.cantidad}</li>
                            <button className="buttonDelete" onClick={() => deleteArticle(producto.id)}><img src="../img/delete.svg" alt="botton de eliminar un producto del carrito" /></button>
                        </ul>
                    ))
                    
                    }
                    <div className="infoButton">
                    <h3>Total: $ {costoTotal()}</h3>
                    <Link to="/checkout">
                        <button className="continueSale">Confirmar compra</button>
                    </Link>
                    <button className="buttonDeleteAll " onClick={() => deleteCart()}>Vaciar carrito</button>
                </div>
                </div>
                
                
            </section>
        </div>
    )
}

export default Cart