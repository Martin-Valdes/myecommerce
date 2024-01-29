import { useState } from "react"

import { Link } from "react-router-dom"

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
        backgroundColor: colorCard ? '#HHHHHHHH': '#FFFFFFF'
       
    }
    return (
        <div 
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            style={styleCard}
            className="item" 
        >
            <img className="imgProduct" src={product.img} alt={product.modelo} />
            <h2>{product.modelo}</h2>
            <p className="costProduct">Costo: $ {product.precio}</p>
            <Link to={`/detalle/${product.id}`} className="link bg-gradient-to-l from-red-700">Mas detalles</Link>
        </div>
    )
}
export default Item
