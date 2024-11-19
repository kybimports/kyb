import React, { useState, useEffect } from "react";
import './PageInformacion.css'

export default function PageInformacion() {

    return (
        <div className="PageInformacion w-full h-auto flex flex-column">
            <div className="Seccion01 w-full h-screen flex flex-column relative align-items-center justify-content-center">
                <div className="ImgFondo relative">
                    <img className="Img01 " src="https://i.ibb.co/g7pP49G/IMG-INICIO-01.png" alt="" />
                    <img src="https://i.ibb.co/n1X8hyp/IMG-INFORMACION-02.png" alt="" className="Img02 absolute" />
                </div>

                <div className="Titulo absolute">
                    <div>
                        KYB IMPORT
                    </div>
                    <div>
                        Te asesosaramos en tus compras .
                        calida,precio y seguridad.
                    </div>
                    <div>
                        por el momento somos una tienda online , muy pronto tienda presencial
                    </div>
                    <div>
                        los mejores precios y tratos para todos nuestros clientes, ya que buscamos que ellos obtengan productos con las tres b :( bueno,bonito y barato)
                    </div>
                </div>
                <div className="Subtitulo absolute">
                    los mejores precios y tratos para todos nuestros clientes, ya que buscamos que ellos obtengan productos con las tres b :( bueno,bonito y barato)
                </div>

                <div className="Propiedades01 absolute flex align-items-center justify-content-center">
                    <div>Delivery a ciertas partes de lima.</div>
                    <div>
                        <i class="fa-solid fa-moped fa-bounce"></i>
                    </div>
                </div>
                <div className="Propiedades02 absolute flex align-items-center justify-content-center">
                    <div>Deliveria dentro de las 24 horas.</div>
                    <div>
                        <i class="fa-solid fa-timer fa-beat"></i>
                    </div>
                </div>
            </div>

        </div>
    );
}
