import { useState } from 'react';
import { Productos } from "./Productos";
let Formulario=({pedidos,setPedidos})=>{
    const [precio, setPrecio] = useState(0);

    const handleProductoChange = (e) => {
        const selectedNombre = e.target.value;
        const producto = Productos.find(p => p.nombre === selectedNombre);
        setPrecio(producto ? producto.precio : 0);
    };

    const agregarPedido=(e)=>{
        e.preventDefault();
        const Pedido={
            ID: pedidos.length + 1,
            NombreCliente:e.target.NombreCliente.value,
            Fecha:e.target.Fecha.value,
            NombreProducto:e.target.NombreProducto.value,
            CantidadProducto: parseInt(e.target.CantidadProducto.value),
            Precio: precio,
            Estado: 'Pendiente'
        }
        setPedidos([...pedidos,Pedido])
    }
    return(
        <>
        <h2>Crear Pedidos</h2>
        <form onSubmit={agregarPedido}>
        <div>
        <p>Nombre</p>
        <input type="text" name="NombreCliente" />
        </div>
        <div>
        <p>Fecha</p>
        <input type="date" name="Fecha" />
        </div>
        <div>
        <p>Nombre Productos</p>
        <select name="NombreProducto" onChange={handleProductoChange}>
            <option value="">Selecciona un producto</option>
            {Productos.map((e)=>(
             <option key={e.id} value={e.nombre}>
                {e.nombre}
             </option>   
            ))}
        </select>
        </div>
        <div>
        <p>Cantidad</p>
        <input type="number" name="CantidadProducto"/>
        </div>
        <button>Agregar Pedido</button>
        </form>
        </>
    )
}
export default Formulario