import React, { useState } from "react";
import '../../styles/stylesComponents/cardTecno.css'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export default function CardTipo01({ Producto, Funcion }) {
  const navigate = useNavigate();
  const EnvioDireccion = () => {
    if (Producto) {
      Funcion(Producto);
    }
  }
  return (
    <div className="cardProductoTecno flex align-items-center justify-content-center relative">
      <div className="contenedor absolute flex flex-column align-items-center justify-content-start p-2 gap-2">
        <img src={`${Producto.Img[0].Url}`} alt="" />
        <div className="data h-auto flex align-items-start justify-content-between">
          <div className="w-6 flex flex-column align-items-start Nombre">
            <p>{Producto.Nombre.substring(0, 16)}</p>
            <p>{Producto.Propiedades[0].substring(0, 46)}</p>
          </div>
          <div className={`w-6 flex justify-content-end relative Precio ${"id" + Producto?.id}`}>
            S/.{Producto?.Precio}
          </div>
          {Producto?.Oferta && Producto?.Oferta != 0 && (
            <style>
              {
                `
                      .cardProductoTecno .contenedor .data .id${Producto?.id}::after{
                          content:'';
                          width: 60%;
                          height: 2px;
                          transform: rotate(345deg);
                          background-color: red;
                          position: absolute;
                          bottom:8px;
                          right: 0px;
                      }
                      .cardProductoTecno .contenedor .data .id${Producto?.id}::before{
                          content:'s/. ${(Producto?.Precio - ((Producto?.Precio * Producto?.Oferta) / 100)).toFixed(2)}';
                          font-size: 12px;
                          font-weight: 400;
                          position: absolute;
                          color: red;
                          top: -13px;
                          right: 0px;
                      }
                      `
              }
            </style>
          )

          }
        </div>
        <div className="w-full flex flex-1 align-items-end justify-content-center">
          <div className="botonAgregar w-11 flex align-items-center justify-content-center gap-2 pt-2 pb-2 pl-3 pr-3" onClick={() => EnvioDireccion()}>
            <i class="fa-solid fa-expand"></i>
            <p>Ver Producto</p>
          </div>
        </div>


        {Producto?.Oferta && Producto?.Oferta != 0 && (
          <div className="OfertaDesc flex flex-column align-items-end justify-content-start" style={{ padding: ' 10px 3px 0px 0px' }}>
            <div>{(parseFloat(Producto?.Oferta)).toFixed(1)}%</div>
            <div>Desc.</div>
          </div>
        )}

      </div>

    </div>
  );
}

