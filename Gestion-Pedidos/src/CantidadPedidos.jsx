import { usePedidos } from './PedidosContext';

const CantidadPedidos = () => {
    const { pedidos } = usePedidos();
    const totalPedidos = pedidos.length;

    return (
        <div className="cantidad-pedidos">
            <h2>Cantidad de Pedidos</h2>
            <div className="total-pedidos">
                <p><strong>Total de Pedidos Registrados:</strong> {totalPedidos}</p>
            </div>
        </div>
    );
};

export default CantidadPedidos;
