import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import Swal from 'sweetalert2';

import "./Checkout.css"

const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        emailRepeat: ""
    })
    const [idOrder, setIdOrder] = useState(null)
    const {cart, costoTotal, deleteCart } = useContext(CartContext)

    const saveDataInput = (event) =>{
        setDataForm({...dataForm, [event.target.name]: event.target.value})
    }

    const sendOrder = (event) => {
        event.preventDefault()
        if(dataForm.email===dataForm.emailRepeat){
            const order = {
                dataUser: {...dataForm},
                products: [...cart],
                date: new Date(),
                total: costoTotal()
            }
            uploadOrder(order)
        }else{
            Swal.fire({
                title: 'Los emails no coinciden',
                text: 'Vuelva a intentarlo',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              });
        }
    }

    const uploadOrder = (order) =>{
        const orderRef = collection(db, "ordenes")
        addDoc(orderRef,order).then((respuesta) => {

            setIdOrder(respuesta.id)
            deleteCart()
        });
    }

    return ( 
        <>
        
        <div className="contentForm">
            
            {idOrder ? (
                <div>
                   <h3 className="titleResume">Orden realizada con exito</h3>
                   <section className="orderParrapf">
                    <p>No. de Orden: {idOrder}</p>
                    <p>Nombre: {dataForm.nombre}</p>
                    <p>Telefono: {dataForm.telefono}</p>
                    <p>Email: {dataForm.email}</p>
                   </section>
                   <Link to="/"><button className="buttonInicio">Volver a la tienda</button></Link>
                </div>
                ):(
                <Form 
                dataForm={dataForm} 
                saveDataInput={saveDataInput} 
                sendOrder={sendOrder}
                />
                )}  
        </div>
        </>
     );
}
 
export default Checkout;