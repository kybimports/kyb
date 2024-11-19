import React, { useState, useEffect } from "react";
import '../../styles/stylesPages/PageInicio.css'
import Instragram from '../../img/Instagram.png';
import Facebook from '../../img/Facebook.png';
import Tiktok from '../../img/TikTok.png';

export default function PageInicio() {

    return (
        <div className="PageInicio w-full h-auto flex flex-column">
            <div className="Seccion01 w-full h-screen flex flex-column relative align-items-center justify-content-center">
                <div className="ImgFondo relative">
                    <img className="Img01 " src="https://i.ibb.co/g7pP49G/IMG-INICIO-01.png" alt="" />
                    <img src="https://i.ibb.co/TWs5HW5/IMG-INICIO-02.png" alt="" className="Img02 absolute" />
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
                        los mejores precios y tratos para todos nuestros clientes, ya que buscamos que ellos obtengan productos con las tres b :( bueno,bonito y barato)
                    </div>

                </div>

                <div className="Redes flex flex-column gap-2 p-3 border-round-2xl absolute">
                    <a href="https://es.imgbb.com" className="flex gap-2 align-items-center justify-content-center" target="_blank" >
                        <img src={Instragram} alt="" />
                        <div>Instagram</div>
                    </a>
                    <a href="https://es.imgbb.com" className="flex gap-2 align-items-center justify-content-center" target="_blank">
                        <img src={Facebook} alt="" />
                        <div>Facebook</div>
                    </a>
                    <a href="https://es.imgbb.com" className="flex gap-2 align-items-center justify-content-center" target="_blank">
                        <img src={Tiktok} alt="" />
                        <div>Tiktok</div>
                    </a>
                </div>

            </div>

        </div>
    );
}
