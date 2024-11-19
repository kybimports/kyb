import React, { useState, useEffect } from "react";
import '../../styles/stylesComponents/Carrusel/CarruselGeneral.css'

export default function CarruselGeneral({ Contenido, Cantidad, CantidadMostrar, Id }) {
    const [widthElement, setwidthElement] = useState(0);
    const [LimiteCarrusel, setLimiteCarrusel] = useState(0);
    const [MitadCarrusel, setMitadCarrusel] = useState(Math.floor((Cantidad - CantidadMostrar) / 2));
    const [UbicacionElementos, setUbicacionElementos] = useState(0);
    useEffect(() => {
        setUbicacionElementos(MitadCarrusel * widthElement * -1)
    }, [widthElement])

    useEffect(() => {
        const contenedorElementos = document.querySelector('.CarruselGeneral.Contenedor.' + Id + '>div');
        if (contenedorElementos) {
            const width = contenedorElementos.offsetWidth;
            setwidthElement(width / Cantidad);
        }
    }, []);
    useEffect(() => {
        setLimiteCarrusel((widthElement * Cantidad) - (widthElement * CantidadMostrar))
    }, [widthElement])

    const AdelantarScroll = () => {
        setUbicacionElementos(UbicacionElementos + widthElement);
    }
    const RetrocederScroll = () => {
        setUbicacionElementos(UbicacionElementos - widthElement);
        console.log("01: " + MitadCarrusel);
    }



    return (
        <div className="ContenedorCarruselGeneral buttons w-auto h-auto relative flex align-items-center justify-content-center">
            {UbicacionElementos !== 0 && (

                <button className="Btn01" onClick={() => { AdelantarScroll() }}>
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
            )}
            {UbicacionElementos !== (LimiteCarrusel * -1) && (

                <button className="Btn02" onClick={() => { RetrocederScroll() }}>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            )}

            <div className={`CarruselGeneral Contenedor ${Id} h-auto flex align-items-center justify-content-start`} style={{ width: `${widthElement * CantidadMostrar}px` }}>
                <style>
                    {`
                        .CarruselGeneral.Contenedor.${Id}>div{
                            left: ${UbicacionElementos}px !important;
                        }
                    `}
                </style>
                {Contenido}
            </div>
        </div>

    );
}
