import { useEffect, useState } from "react";
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

        <div>
            <button onClick={restar}> - </button>
            <button onClick={sumar}> + </button>
            <p>{count}</p>
            {/* <button onClick={confirmSale}>Terminar Compra</button> */}
        </div>

    )

}
export default ItemCount