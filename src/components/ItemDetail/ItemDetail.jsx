import "./ItemDetail.css"

const ItemDetail = ({producto}) => {

    return (

        <div className="detailItem">
            <img src={producto.img} alt="" />
            <p>Modelo: {producto.modelo}</p>
            <p>Descripcion: {producto.descripcion}</p>
            <p>Stock disponible: {producto.stock}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>Costo: ${producto.precio}</p>
        </div>
    )
}

export default ItemDetail 