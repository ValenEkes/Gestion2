import { useState, useContext } from 'react';
import { Productos, Estados } from "./Productos";
import { PedidosContext } from './PedidosContext';
import "./Diseño/Formulario.css";

const CrearPedido = () => {
    const { pedidos, setPedidos } = useContext(PedidosContext);
    const [precio, setPrecio] = useState(0);

    const handleProductoChange = (e) => {
        const selectedNombre = e.target.value;
        const producto = Productos.find(p => p.nombre === selectedNombre);
        setPrecio(producto ? producto.precio : 0);
    };

    const agregarPedido = (e) => {
        e.preventDefault();
        const Pedido = {
            ID: pedidos.length + 1,
            NombreCliente: e.target.NombreCliente.value,
            Fecha: e.target.Fecha.value,
            NombreProducto: e.target.NombreProducto.value,
            CantidadProducto: parseInt(e.target.CantidadProducto.value),
            Precio: precio,
            Estado: e.target.Estado.value
        };
        setPedidos([...pedidos, Pedido]);
        e.target.reset();
        setPrecio(0);
    };

    return (
        <div className="formulario">
            <h2>Crear Pedido</h2>
            <form onSubmit={agregarPedido}>
                <div className="form-group">
                    <label htmlFor="NombreCliente">Nombre</label>
                    <input type="text" id="NombreCliente" name="NombreCliente" required />
                </div>
                <div className="form-group">
                    <label htmlFor="Fecha">Fecha</label>
                    <input type="date" id="Fecha" name="Fecha" required />
                </div>
                <div className="form-group">
                    <label htmlFor="NombreProducto">Nombre Productos</label>
                    <select id="NombreProducto" name="NombreProducto" onChange={handleProductoChange} required>
                        <option value="">Selecciona un producto</option>
                        {Productos.map((e) => (
                            <option key={e.id} value={e.nombre}>
                                {e.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="CantidadProducto">Cantidad</label>
                    <input type="number" id="CantidadProducto" name="CantidadProducto" min="1" required />
                </div>
                <div className="form-group">
                    <label htmlFor="Estado">Tipo de Estado</label>
                    <select id="Estado" name="Estado" required>
                        <option value="">Selecciona un estado</option>
                        {Estados.map((e) => (
                            <option key={e.id} value={e.estado}>{e.estado}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn-submit">Agregar Pedido</button>
            </form>
        </div>
    );
};

export default CrearPedido;
