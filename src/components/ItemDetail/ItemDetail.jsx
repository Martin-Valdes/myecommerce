const ItemDetail = ({producto}) => {

    return (

        <div>
            <img src={producto.img} alt="" />
            <p>{producto.modelo}</p>
        </div>
    )
}

export default ItemDetail 