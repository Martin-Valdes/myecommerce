import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

import "./CartWidget"


const CartWidget = () => {

    const {cart, allArticle} = useContext(CartContext)
   

    return(
            
            <Link to="/cart" className="cartLogo">
                <p>🛒</p>
                {
                    cart.length !== 0 && <p>{allArticle()}</p>
                }
                
            </Link>
        
    )
}

export default CartWidget