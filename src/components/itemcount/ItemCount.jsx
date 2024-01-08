import {  useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(1);

    const sumar = () =>{

        if (count < stock){
        setCount(count + 1)
        }
    }
    const restar = () =>{
        if (count > 1){
        setCount(count - 1)
        }
    }

    return (

        <div className="countItem">
            <button onClick={restar}> - </button>
            <p>{count}</p>
            <button onClick={sumar}> + </button>
            <button onClick={() => onAdd(count)} className="sale">Agregar al carrito</button>
        </div>

    )

}
export default ItemCount