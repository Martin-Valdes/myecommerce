import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

import "./CartWidget"


const CartWidget = () => {

    const {allArticle} = useContext(CartContext)
    console.log(allArticle)
    return(
            
            <Link to="/cart" className="cartLogo">
                <img className="imgCart" src="/img/cart.png" alt="logo cart" />
                <p>{allArticle()}</p>
            </Link>
        
    )
}

export default CartWidget