import { useState } from 'react'
import './App.css'
import Formulario from './FormularioPedidos'
import Listado from './Listado'
function App() {
  const [pedidos, setPedidos] = useState([])

  return (
    <>
     <h1>Pedidos Usuario</h1>
     <div>
     <Formulario pedidos={pedidos} setPedidos={setPedidos}></Formulario>
     </div>
     <div>
      <Listado pedidos={pedidos} setPedidos={setPedidos}></Listado>
     </div>
    </>
  )
}

export default App
