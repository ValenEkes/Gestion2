import { createContext, useState, useEffect } from 'react';

export const PedidosContext = createContext();

export const PedidosProvider = ({ children }) => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('pedidos');
    if (saved) setPedidos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
  }, [pedidos]);

  return (
    <PedidosContext.Provider value={{ pedidos, setPedidos }}>
      {children}
    </PedidosContext.Provider>
  );
};
