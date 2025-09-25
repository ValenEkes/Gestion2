let Formulario=({pedidos,setPedidos})=>{
const agregarPedido=(e)=>{
    const Pedido={
        NombreCliente:e.target.NombreCliente.value,
        Fecha:e.target.Fecha.value,
        NombreProducto:e.target.NombreProducto.value,
        Cantidad:e.target.Cantidad.value
    }
    setPedidos([...pedidos,Pedido])
}
    return(
        <>
        <h2>Crear Pedidos</h2>
        <form onSubmit={agregarPedido}>
        <div>
        <p>Nombre</p>
        <input type="text" name="Cliente" />
        </div>
        <div>
        <p>Fecha</p>
        <input type="date" name="Fecha" />  
        </div>
        <div>
        <p>Nombre Productos</p>
        <input type="text" name="Productos" />
        </div>
        <div>
        <p>Cantidad</p>
        <input type="number" name="Cantidad"/>
        </div>
        <button>Agregar Pedido</button>
        </form>
        </>
    )
}
export default Formulario