import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./NavBar.scss"


const NavBar = () => {
    return(
        <div className="navBar">
            <Link to="/"><img src="/img/logo.png" alt="logo de empresa"/></Link>
            <h1>ElectroComp</h1>
            <nav className="listNav">
                <ul>
                    <li><Link to="categoria/componentes">Componentes</Link></li>
                    <li><Link to="categoria/fuentes">Fuentes</Link></li>
                    <li><Link to="categoria/medicion">Medicion</Link></li>
                    <li><Link to="categoria/soldadores">Soldadores</Link></li>
                </ul>
                <CartWidget/>
            </nav>
        </div>
    )
}

export default NavBar