import React, { useState, useEffect } from "react";
import '../Style/Seccion03.css'
import CardTipo02 from "../../../components/Cards/cardTipo02";
import CarruselGeneral from "../../../components/Carrusel/CarruselGeneral";
import SeccionSubTitulo01 from "./SeccionSubTitulo01";
import SeccionSubTitulo02 from "./SeccionSubTitulo02";

export default function Seccion03() {

    return (
        <div className="PageInicioSecccion03 w-full flex flex-column align-items-center justify-content-center gap-4">
            <SeccionSubTitulo02
                Imagen={'https://www.ofimaticasz.com/wp-content/uploads/2021/10/pexels-tima-miroshnichenko-9574327-640x320.jpg'}
                Titulo={'REPUESTOS:'}
                Descripcion={'Explora nuestra variedad de fotocopiadoras e impresoras, ideales para cualquier entorno. Desde modelos compactos y económicos hasta equipos multifuncionales avanzados, ofrecemos opciones para cada necesidad.'}
            />
            <div className="w-full h-auto flex align-items-center justify-content-center" style={{ gap:'20px' }}>
                <CardTipo02 />
                <CardTipo02 />
                <CardTipo02 />
                <CardTipo02 />
            </div>

            <SeccionSubTitulo01
                Imagen={'https://www.ofimaticasz.com/wp-content/uploads/2021/10/pexels-tima-miroshnichenko-9574327-640x320.jpg'}
                Titulo={'INSUMOS:'}
                Descripcion={'Explora nuestra variedad de fotocopiadoras e impresoras, ideales para cualquier entorno. Desde modelos compactos y económicos hasta equipos multifuncionales avanzados, ofrecemos opciones para cada necesidad.'}
            />
            <div className="w-full h-auto flex align-items-center justify-content-center" style={{ gap:'20px' }}>
                <CardTipo02 />
                <CardTipo02 />
                <CardTipo02 />
                <CardTipo02 />
            </div>
        </div>
    );
}
