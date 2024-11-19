import React, { useState, useEffect } from "react";
import '../styles/stylesComponents/precioOferta.css'

export default function PrecioOferta({ Descuento, PrecioBase, Color }) {
    const [PrecioDesc, setPrecioDesc] = useState()
    const [PrecioBas, setPrecioBas] = useState(parseFloat(PrecioBase).toFixed(1))

    useEffect(() => {
        let TotalDesc = (100 - Descuento) / 100;
        setPrecioDesc(parseFloat(PrecioBase * TotalDesc).toFixed(1));
    }, [PrecioBase])

    return (
        <div className='ContenPrecio Oferta w-full h-auto relative flex align-items-center justify-content-center'>
            {Descuento && (
                <div className="EtiquetaDesc">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#fff" class="injected-svg" color="#000000">
                        <path d="M2.73552 11.6867C1.78253 12.7511 1.76203 14.3569 2.63665 15.4865C4.37226 17.7281 6.2719 19.6277 8.51351 21.3633C9.64313 22.238 11.2489 22.2175 12.3133 21.2645C15.203 18.6771 17.8494 15.9731 20.4033 13.0016C20.6558 12.7078 20.8137 12.3477 20.8492 11.9619C21.0059 10.2561 21.3279 5.34144 19.9932 4.00675C18.6586 2.67207 13.7439 2.99408 12.0381 3.15083C11.6523 3.18627 11.2922 3.34421 10.9984 3.59671C8.02692 6.15064 5.32291 8.797 2.73552 11.6867Z" stroke="#000000" stroke-width="1"></path>
                        <path d="M18 6L22 2" stroke="#000000" stroke-width="1" stroke-linecap="round"></path>
                    </svg>
                    <div className="flex align-items-center justify-content-center">
                        <div className="TotalDe">{Descuento}</div>
                        <div className="Desccc">%</div>
                    </div>
                    <div>OFF</div>
                </div>
            )}

            <div className="OnlyPrecio" style={{ color: Color }}>
                s/. {PrecioDesc}0
                {Descuento && (
                    < div >
                        s /. {PrecioBas}0
                        <div style={{borderBottomColor: Color}}></div>
                    </div>
                )}

            </div>
        </div >
    );
}