import React, { useState, useRef, useEffect } from "react";
import '../../styles/stylesComponents/Carrusel/ImgSelect.css';
import { Button } from 'primereact/button';

export default function ImgSelect({ Elements, ImgSele }) {
    const [zoomView, setzoomView] = useState(false)
    const [posicionX, setposicionX] = useState(0);
    const [posicionY, setposicionY] = useState(0);
    const handleMouseMove = (event) => {
        setzoomView(true);
        const container = event.currentTarget;

        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setposicionX((x*100)/370);
        setposicionY((y*100)/360);
    };
    console.log("Img",ImgSele);
    return (
        <div className="ImgSelectContenCompo" onMouseMove={handleMouseMove}
        onMouseOut={()=>{setzoomView(false)}}>
            <img src={`${Elements?Elements[ImgSele]?.Url:""}`} alt="" />
            <div className="zoom" style={{
                backgroundImage: `url(${Elements?Elements[ImgSele]?.Url:""})`,
                backgroundPosition: posicionX+'% '+ posicionY+'%',
                display: `${zoomView?'block':'none'}`
            }}>
            </div>
        </div>
    );
}

