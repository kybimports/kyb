import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from './Get.js';
const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [Etiquetas, setEtiquetas] = useState(null);
    const [Productos, setProductos] = useState(null);
    const [Categorias, setCategorias] = useState(null);

    const GetProductos = async () => {
        const Products = await fetchData('Productos');
        setProductos(Products);
    }

    const GetEtiquetas = async () => {
        const Tags = await fetchData('Etiquetas');
        setEtiquetas(Tags);
    }

    const GetCategorias = async () => {
        const Categorias = await fetchData('Categorias');
        setCategorias(Categorias);
    }

    useEffect(() => {
        GetProductos();
        GetEtiquetas();
        GetCategorias();
    }, []);

    return (
        <DataContext.Provider value={{
            Etiquetas,
            setEtiquetas,
            Productos,
            setProductos,
            Categorias,
            setCategorias
        }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext };
export default DataContext;