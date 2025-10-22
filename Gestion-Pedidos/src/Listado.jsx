import { useState, useContext } from "react";
import Pedidos from "./Pedidos";
import { Estados } from "./Productos";
import { PedidosContext } from './PedidosContext';
import "./Diseño/Listado.css"
let Listado=()=>{
    const { pedidos, setPedidos } = useContext(PedidosContext);
    const [filtroEstado, setFiltroEstado] = useState("");

    const pedidosFiltrados = filtroEstado ? pedidos.filter(p => p.Estado === filtroEstado) : pedidos;

    // Calcular contadores
    const totalPedidos = pedidos.length;
    const contadoresPorEstado = Estados.reduce((acc, estado) => {
        acc[estado.estado] = pedidos.filter(p => p.Estado === estado.estado).length;
        return acc;
    }, {});

    return (
    <div className="Listado">
    <h2>Pedidos registrados</h2>
    <div className="contadores">
        <p><strong>Total de Pedidos:</strong> {totalPedidos}</p>
        {Estados.map((estado) => (
            <p key={estado.id}><strong>{estado.estado}:</strong> {contadoresPorEstado[estado.estado]}</p>
        ))}
    </div>
    <div className="filtro">
        <label htmlFor="estado">Filtrar por Estado:</label>
        <select id="estado" value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}>
            <option value="">Todos</option>
            {Estados.map((e) => (
                <option key={e.id} value={e.estado}>{e.estado}</option>
            ))}
        </select>
    </div>
    <div className="pedidos-container">
    {
    pedidosFiltrados.map((e,index)=><Pedidos key={e.ID} ID={e.ID} Cliente={e.NombreCliente} Fecha={e.Fecha} Estado={e.Estado} NombreProducto={e.NombreProducto} CantidadProducto={e.CantidadProducto} Precio={e.Precio}/>)
    }
    </div>
    </div>
    );
}
export default Listado;
