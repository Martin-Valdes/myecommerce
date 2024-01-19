
const Form = ({saveDataInput, sendOrder, dataForm}) => {

    return(
        <form onSubmit={sendOrder} className="form" >
                <h2 className=" font-mono text-2xl  ">Ingrese sus datos</h2>
                <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                <input type="text" id="nombre" className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-lg sm:leading-6" name="nombre" value={dataForm.nombre} onChange={saveDataInput} required/>

                <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">Telefono</label>
                <input type="text" id="telefono" className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-lg sm:leading-6" name="telefono" value={dataForm.telefono} onChange={saveDataInput} required/>
                
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <input type="email" id="email" name="email" className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-lg sm:leading-6" value={dataForm.email} onChange={saveDataInput} required/>

                <label htmlFor="emailRepeat" className="block text-sm font-medium leading-6 text-gray-900">Repetir Email</label>
                <input type="email" id="emailRepeat" name="emailRepeat" className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-lg sm:leading-6" value={dataForm.emailRepeat} onChange={saveDataInput}required/>

                <button type="submit" className="buttonConfirm inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700" >Confirmar compra</button>
        </form>
    )
    
}

export default Form