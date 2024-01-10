import { Link } from "react-router-dom"
import { useState } from "react"

import "./Item.css"

const Item = ({product}) =>{

    const [colorCard, setColorCard] = useState(false);

    const handleMouseOver = () => {

        setColorCard(true);
    };

    const handleMouseLeave = () => {

        setColorCard(false);
    };

    const styleCard ={
        backgroundColor: colorCard ? '#E1D8E6': '#C8C7E8'
       
    }
    return (
        <div 
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            style={styleCard}
            className="item" 
        >
            <img src={product.img} alt={product.modelo} />
            <h2>{product.modelo}</h2>
            <p>Costo: $ {product.precio}</p>
            <Link to={`/detalle/${product.id}`} className="link">Mas detalles</Link>
        </div>
    )
}
export default Item
