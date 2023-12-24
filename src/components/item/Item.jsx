import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({product}) =>{
    return (
        <div className="item" >
            <img src={product.img} alt={product.modelo} />
            <p>{product.modelo}</p>
            <p>Costo: $ {product.precio}</p>
            <Link to={`/detalle/${product.id}`} className="link">Mas detalles</Link>
        </div>
    )
}
export default Item
