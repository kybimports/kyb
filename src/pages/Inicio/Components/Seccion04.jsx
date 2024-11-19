import React, { useState, useEffect } from "react";
import '../Style/Seccion04.css'
import CardTipo03 from "../../../components/Cards/cardTipo03";
import CarruselGeneral from "../../../components/Carrusel/CarruselGeneral";

export default function Seccion04() {
    const Opiniones = [
        {
            Nombre: 'Marco Antonio Lopez',
            Foto: 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm90byUyMGRlJTIwcGVyZmlsfGVufDB8fDB8fHww',
            Opinion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore exercitationem nemo modi!',
            Estrellas: '4',
            Trabajo: 'Maestro'
        },
        {
            Nombre: 'Marco Antonio Lopez',
            Foto: 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm90byUyMGRlJTIwcGVyZmlsfGVufDB8fDB8fHww',
            Opinion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore exercitationem nemo modi!',
            Estrellas: '0.5',
            Trabajo: 'Maestro'
        },
        {
            Nombre: 'Marco Antonio Lopez',
            Foto: 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm90byUyMGRlJTIwcGVyZmlsfGVufDB8fDB8fHww',
            Opinion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore exercitationem nemo modi!',
            Estrellas: '1.5',
            Trabajo: 'Maestro'
        },
        {
            Nombre: 'Marco Antonio Lopez',
            Foto: 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm90byUyMGRlJTIwcGVyZmlsfGVufDB8fDB8fHww',
            Opinion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore exercitationem nemo modi!',
            Estrellas: '0.5',
            Trabajo: 'Maestro'
        },
        {
            Nombre: 'Marco Antonio Lopez',
            Foto: 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm90byUyMGRlJTIwcGVyZmlsfGVufDB8fDB8fHww',
            Opinion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore exercitationem nemo modi!',
            Estrellas: '3',
            Trabajo: 'Maestro'
        },
        {
            Nombre: 'Marco Antonio Lopez',
            Foto: 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm90byUyMGRlJTIwcGVyZmlsfGVufDB8fDB8fHww',
            Opinion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore exercitationem nemo modi!',
            Estrellas: '0.5',
            Trabajo: 'Maestro'
        }
    ];
    const ContenedorOpiniones = (
        <div>
            {Opiniones.map((item) => {
                return (
                    <CardTipo03 Starts={item.Estrellas} Usuario={item.Nombre} Comentario={item.Opinion} Foto={item.Foto} Trabajo={item.Trabajo} />
                )
            })}
        </div>
    )

    return (
        <div className="PageInicioSecccion04 w-full flex align-items-center justify-content-center gap-3">
            <CarruselGeneral Contenido={ContenedorOpiniones} Cantidad={6} CantidadMostrar={4} Id={'carruselOpiniones'}/>
        </div>
    );
}
