import React, { useState, useEffect } from "react";
import '../Style/SeccionSubTitulo.css'

export default function SeccionSubTitulo01({ Titulo, Descripcion, Imagen }) {
    return (
        <div className="SeccionSubTitulo Contenedor w-full flex align-items-center justify-content-center gap-4">
            <div className="ContenidoTT flex align-items-center justify-content-center gap-2">
                <div className="conteTot flex flex-column gap-1">
                    <div className="Titulo">{Titulo}</div>
                    <div className="contenido">{Descripcion}</div>
                </div>
                <div className="Img flex align-items-center">
                    <img src={Imagen} alt="" />
                </div>
            </div>

        </div>
    );
}
