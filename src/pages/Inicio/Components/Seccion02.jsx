import React, { useState, useEffect } from "react";
import '../Style/Seccion02.css'
import CardTipo01 from "../../../components/Cards/cardTipo01";
import CarruselGeneral from "../../../components/Carrusel/CarruselGeneral";
import SeccionSubTitulo01 from "./SeccionSubTitulo01";

export default function Seccion02() {
    const ContenidoCarrusel01 = (
        <div>
            <CardTipo01 />
            <CardTipo01 />
            <CardTipo01 />
            <CardTipo01 />
            <CardTipo01 />
            <CardTipo01 />
            <CardTipo01 />
            <CardTipo01 />
            <CardTipo01 />
            <CardTipo01 />
        </div>
    )
    const ContenidoCarrusel02 = (
        <div>
            <CardTipo01 />
            <CardTipo01 />
            <CardTipo01 />
            <CardTipo01 />
            <CardTipo01 />
            <CardTipo01 />
        </div>
    )

    return (
        <div className="PageInicioSecccion02 w-full flex flex-column align-items-center justify-content-center gap-1">
            <SeccionSubTitulo01
                Imagen={'https://www.ofimaticasz.com/wp-content/uploads/2021/10/pexels-tima-miroshnichenko-9574327-640x320.jpg'}
                Titulo={'NUESTROS EQUIPOS:'}
                Descripcion={'Explora nuestra variedad de fotocopiadoras e impresoras, ideales para cualquier entorno. Desde modelos compactos y económicos hasta equipos multifuncionales avanzados, ofrecemos opciones para cada necesidad.'}
            />

            <div className="w-full flex align-items-center justify-content-center">
                <img src="https://www.cla.canon.com/sys/images/canon_main_logo.gif" alt="" />
            </div>
            <div className="w-auto flex align-items-center justify-content-center gap-3">
                <CarruselGeneral Contenido={ContenidoCarrusel01} Cantidad={10} CantidadMostrar={4} Id={'Canon'}/>
            </div>

            <div className="w-full flex align-items-center justify-content-center">
                <img src="https://emisoft.cuscoinformatico.com/storage/Ricoh_logo_2005.svg.png" alt="" />
            </div>
            <div className="w-auto flex align-items-center justify-content-center gap-3">
                <CarruselGeneral Contenido={ContenidoCarrusel02} Cantidad={6} CantidadMostrar={4} Id={'Ricoh'}/>
            </div>

        </div>
    );
}
