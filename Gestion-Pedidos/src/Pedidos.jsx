import './Diseño/Pedidos.css'
let Pedidos =({ID, Cliente, Fecha, Estado, NombreProducto, CantidadProducto, Precio})=>{
    return(
        <>
   
        <div class="PedidosLista">
        <div>
        <p>ID</p>
        <span>{ID}</span>
        </div>
        <div>
        <p>Cliente</p>
        <span>{Cliente}</span>
        </div>
        <div>
        <p>Fecha</p>
        <span>{Fecha}</span>
        </div>
        <div>
        <p>Estado</p>
        <span>{Estado}</span>
        </div>
        <div>
        <p>Nombre Producto</p>
        <span>{NombreProducto}</span>
        </div>
        <div>
        <p>Cantidad del Producto</p>
        <span>{CantidadProducto}</span>
        </div>
        <div>
        <p>Precio</p>
        <span>{Precio}</span>
        </div>
        </div>
        </>
    )
}
export default Pedidos