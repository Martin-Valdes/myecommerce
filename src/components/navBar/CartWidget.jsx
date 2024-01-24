import { useContext } from "react"

import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const CartWidget = () => {

    const {cart, allArticle} = useContext(CartContext)
   

    return(
            
            <Link to="/cart" className="cartLogo">
                <img src="../img/carro-de-la-compra.png" alt="carro de compras" />
                {
                    cart.length !== 0 && <p>{allArticle()}</p>
                }
            </Link>
        
    )
}

export default CartWidget