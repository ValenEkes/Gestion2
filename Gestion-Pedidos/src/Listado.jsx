import Pedidos from "./Pedidos";
let Listado=({pedidos, setPedidos})=>{
    return (
    <div>
    <h2>Clientes registrados</h2>
    {
    pedidos.map((e,index)=><Pedidos ID={e.ID} Cliente={e.NombreCliente} Fecha={e.Fecha} Estado={e.Estado} NombreProducto={e.NombreProducto} CantidadProducto={e.CantidadProducto} Precio={e.Precio}/>)
    }
    </div>
    );
}
export default Listado;
