import Pedidos from "./Pedidos";
let Listado=({pedidos, setPedidos})=>{
    return (
    <div>
    <h2>Clientes registrados</h2>
    {
    pedidos.map((e,index)=><Pedidos index={index} Cliente={e.NombreCliente} Fecha={e.Fecha} NombreProducto={e.NombreProducto} CantidadProducto={e.Cantidad}/>)
    }
    </div>
    );
}
export default Listado;