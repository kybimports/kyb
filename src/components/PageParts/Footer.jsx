import React, { useState, useEffect } from "react";
import '../../styles/stylesComponents/PageParts/Footer.css'

export default function Footer() {

    return (
        <div className="FooterFondo w-full h-auto flex flex-column relative">
            <div className="FooterGeneral w-full h-auto flex align-items-start justify-content-center gap-2 p-3">
                <div>
                    <div className="TituOPri">Nosotros somos...</div>
                    <div className="ContenOPri">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cumque quia vel, nihil, fugiat ut neque ullam recusandae asperiores tempora, earum laborum eaque debitis consequatur in minima dolor facilis odio?
                    </div>
                </div>
                <div className="flex flex-column align-items-center justify-content-start gap-2">
                    <div className="ContentOneFooter">
                        <div className="Titu">Contacto:</div>
                        <a className="ContenF flex gap-1 align-items-center justify-content-start" href="https://chatgpt.com" target="_blank">
                            <i class="fa-solid fa-envelope"></i>
                            fotocopiadorashyl@gmail.com
                        </a>
                    </div>


                    <div className="ContentOneFooter">
                        <div className="Titu">Horario:</div>
                        <div className="ContenF flex gap-1">
                            <i class="fa-solid fa-clock"></i>
                            8:00 a.m. - 6:00 a.m.
                        </div>
                    </div>

                    <div className="ContentOneFooter">
                        <div className="Titu">Ubicación:</div>
                        <a className="ContenF flex gap-1" href="https://chatgpt.com" target="_blank">
                            <i class="fa-solid fa-location-dot"></i>
                            Av. Azángaro 983 Interior 149-152 Lima, Lima, Peru
                        </a>
                    </div>
                </div>
                <div className="flex flex-column align-items-center justify-content-center gap-2">
                    <div className="ContentOneFooter">
                        <div className="Titu">Redes sociales:</div>
                        <a className="ContenF flex gap-1" href="https://chatgpt.com" target="_blank">
                            <i class="fa-brands fa-facebook"></i>
                            L&H PERU S.A.C
                        </a>
                        <a className="ContenF flex gap-1" href="https://chatgpt.com" target="_blank">
                            <i class="fa-brands fa-whatsapp"></i>
                            993 652 611
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}