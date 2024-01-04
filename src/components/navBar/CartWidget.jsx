import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {

    const {allArticle} = useContext(CartContext)

    return(

            <Link to="/cart" className="cartLogo">
                <img src="/img/cart.png" alt="logo cart" />
                <p>{allArticle()}</p>
            </Link>
        
    )
}

export default CartWidget