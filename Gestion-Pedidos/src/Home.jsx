import { Link } from 'react-router-dom'
import './App.css'

const Home = () => {
    return (
        <>
            <h1>Gestión de Pedidos</h1>
            <div className="home-links">
                <p>Selecciona una opción:</p>
                <ul>
                    <li><Link to="/crear-pedido">Crear un nuevo pedido</Link></li>
                    <li><Link to="/listado">Ver lista completa de pedidos</Link></li>
                </ul>
            </div>
        </>
    )
}
export default Home