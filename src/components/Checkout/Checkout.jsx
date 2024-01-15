import { useContext, useState } from "react";
import Form from "./form";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";

const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        nombre: "",
        telefono: "",
        email: ""
    })
    const [idOrder, setIdOrder] = useState(null)
    const {cart, costoTotal, deleteCart } = useContext(CartContext)

    const saveDataInput = (event) =>{
        setDataForm({...dataForm, [event.target.name]: event.target.value})
    }

    const sendOrder = (event) => {
        event.preventDefault()
        const order = {
            dataUser: {...dataForm},
            products: [...cart],
            total: costoTotal()
        }
        uploadOrder(order)
    }

    const uploadOrder = (order) =>{
        const orderRef = collection(db, "ordenes")
        addDoc(orderRef,order).then((respuesta) => {

            setIdOrder(respuesta.id)
            deleteCart()
        });
    }

    return ( 
        <div>
            {idOrder ? (
                <div>
                   <h3>Orden realizada con exito</h3>
                   <p>No. de Orden: {idOrder}</p>
                   <p>Nombre: {dataForm.nombre}</p>
                   <p>Telefono: {dataForm.telefono}</p>
                   <p>Email: {dataForm.email}</p>
                </div>
                ):(
                <Form 
                dataForm={dataForm} 
                saveDataInput={saveDataInput} 
                sendOrder={sendOrder}
                />
                )}  
        </div>
     );
}
 
export default Checkout;