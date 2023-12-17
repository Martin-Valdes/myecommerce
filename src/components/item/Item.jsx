import "./Item.css"

const Item = ({product}) =>{
    return (
        <div className="item" >
            <img src={product.img} alt={product.modelo} />
            <p>{product.modelo}</p>

        </div>
    )
}
export default Item
