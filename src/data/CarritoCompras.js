// CarritoCompras.js
import React, { createContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [Carrito, setCarrito] = useState([
    ]);

    return (
        <CarritoContext.Provider value={{ Carrito, setCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};

export { CarritoContext }; // Exporta el contexto
export default CarritoContext;
