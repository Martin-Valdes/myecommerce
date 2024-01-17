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
            <button className=" countButton transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100" onClick={sumar}> + </button>
            <p className="numberProduct">{count}</p>
            <button className=" countButton transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100" onClick={restar}> - </button>
            <button  onClick={() => onAdd(count)} className="sale outline-double outline-offset-1 outline-blue-600 "><b>Agregar al carrito</b></button>
        </div>

    )

}
export default ItemCount