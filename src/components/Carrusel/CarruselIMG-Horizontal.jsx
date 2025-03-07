import React, { useState, useRef, useEffect } from "react";
import '../../styles/stylesComponents/Carrusel/CarruselIMG.css';
import { Button } from 'primereact/button';

export default function CarruselImgProductoHorizontal({ Elements, ChangeImg, Img }) {
    const [ScrollUbi, setScrollUbi] = useState(0);
    const [IndexImgSelect, setIndexImgSelect] = useState(0);

    const SubirCarrusel = () => {
        const elemento = document.querySelector('.ContenedorCarrusel.CarruselIMG .ContenedorIMG');
        const buttonUp = document.querySelector('.Carrusel.ContenedorBotones button:nth-child(1)');

        if (elemento) {
            const topActual = window.getComputedStyle(elemento).left;
            const valorTopActual = parseFloat(topActual) || 0;

            if (valorTopActual != 0) {
                buttonUp.disabled = true;
                elemento.style.left = `${valorTopActual + 123.5}px`;
                setTimeout(() => {
                    buttonUp.disabled = false;
                }, 500);
                setScrollUbi(ScrollUbi + 123.5);
            } else {
                buttonUp.style.visibility = 'visible'
            }
        } else {
            console.warn('Elemento no encontrado');
        }
    }
    const BajarCarrusel = () => {
        const elemento = document.querySelector('.ContenedorCarrusel.CarruselIMG .ContenedorIMG');
        const buttonDown = document.querySelector('.Carrusel.ContenedorBotones button:nth-child(2)');

        if (elemento) {
            const topActual = window.getComputedStyle(elemento).left;
            const valorTopActual = parseFloat(topActual) || 0;

            const totalElement = Elements?.length;
            if (valorTopActual != -((totalElement - 3) * 123.5)) {
                buttonDown.disabled = true;
                elemento.style.left = `${valorTopActual - 123.5}px`;
                setTimeout(() => {
                    buttonDown.disabled = false;
                }, 500);
                setScrollUbi(ScrollUbi - 123.5);
            }
        } else {
            console.warn('Elemento no encontrado');
        }
    }
    useEffect(() => {
        const buttonUp = document.querySelector('.Carrusel.ContenedorBotones button:nth-child(1)');
        const buttonDown = document.querySelector('.Carrusel.ContenedorBotones button:nth-child(2)');

        if (ScrollUbi == 0) {
            if (buttonUp) {
                buttonUp.style.visibility = 'hidden';
            }
        } else {
            if (buttonUp) {
                buttonUp.style.visibility = 'visible';
            }
        }

        const totalElement = Elements?.length;
        if (ScrollUbi == -((totalElement - 3) * 123.5)) {
            if (buttonDown) {
                buttonDown.style.visibility = 'hidden';
            }
        } else {
            if (buttonDown) {
                buttonDown.style.visibility = 'visible';
            }
        }
    }, [ScrollUbi]);



    return (
        <div className="Carrusel ContenedorBotones Horizontal mt-2">
            {Elements?.length > 3 && (
                <>
                    <button className="p-button-text" onClick={SubirCarrusel}
                        style={{ visibility: `${ScrollUbi == 0 ? "hidden" : "visible"}` }}>
                        <i className="pi pi-caret-up"></i>
                    </button>
                    <button className="p-button-text" onClick={BajarCarrusel}>
                        <i className="pi pi-caret-down"></i>
                    </button>
                </>
            )}

            <div className="ContenedorCarrusel CarruselIMG flex align-items-start justify-content-center">
                <div className="ContenedorIMG flex flex-column align-items-start justify-content-center">
                    {Elements?.map((item, index) => {
                        return (
                            <div className={`OneImg ${Img == index ? 'SelectImg' : ''}`} onClick={() => { setIndexImgSelect(index); ChangeImg(index) }}>
                                <img src={item} alt="Imagen seleccionada" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

