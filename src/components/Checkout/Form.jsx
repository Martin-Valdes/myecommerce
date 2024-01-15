const Form = ({saveDataInput, sendOrder, dataForm}) => {

    return(
        <form onSubmit={sendOrder}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={dataForm.nombre} onChange={saveDataInput}/>

                <label htmlFor="telefono">Telefono</label>
                <input type="text" id="telefono" name="telefono" value={dataForm.telefono} onChange={saveDataInput}/>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={dataForm.email} onChange={saveDataInput}/>

                <button type="submit" >Confirmar compra</button>
            </form>
    )

}

export default Form