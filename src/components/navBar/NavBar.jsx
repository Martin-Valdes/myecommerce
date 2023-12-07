import CartWidget from "./CartWidget"
import "./NavBar.scss"

const NavBar = () => {
    return(
        <div className="navBar">
            <a href=""><img src="./img/logo.png" alt="logo de empresa"/></a>
            <h1>ElectroComp</h1>
            
            <div className="listNav">
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">PRODUCTOS</a></li>
                    <li><a href="">EMPRESA</a></li>
                    <li><a href="">CONTACTO</a></li>
                </ul>
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar