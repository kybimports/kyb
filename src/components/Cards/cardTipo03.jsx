import React, { useEffect, useState } from "react";
import '../../styles/stylesComponents/Cards/cardTipo03.css'
import { Button } from 'primereact/button';
import PrecioOferta from "../precioOferta";
import DialogVerProducto from "../Dialogs/mostrarProducto";

export default function CardTipo03({ Starts, Usuario, Foto, Comentario, Trabajo }) {
  const [cantStartsComplete, setCantStartsComplete] = useState(0);
  const [cantStartsDecimal, setcantStartsDecimal] = useState(0);
  const [cantStartsRestante, setcantStartsRestante] = useState(0);

  useEffect(() => {
    const complete = parseInt(Starts, 10);
    const redondeado = Math.round(Starts);
    const decimal = parseFloat(Starts) - complete;
    const restante = 5 - redondeado;

    setCantStartsComplete(complete);
    setcantStartsDecimal(decimal);
    setcantStartsRestante(restante);
  }, []);

  const ColocarCompleteStart = () => {
    const elements = [];
    for (let i = 0; i < cantStartsComplete; i++) {
      elements.push(
        <i class="fa-solid fa-star"></i>
      );
    }
    return elements;
  };

  const ColocarIncompleteStart = () => {
    const elements = [];
    for (let i = 0; i < cantStartsRestante; i++) {
      elements.push(
        <i class="fa-regular fa-star"></i>
      );
    }
    return elements;
  };

  return (
    <div className="cardProducto03 Cont flex flex-column align-items-center justify-content-start relative">
      <div className="ContenedorImg flex flex-column align-items-center justify-content-center">
        <img src={Foto} alt="" />
        <div className="Dedicacion">{Trabajo}</div>
      </div>
      <div className="ContenedorDatosUsu flex flex-column align-items-center justify-content-center">
        <div>{Usuario}</div>
        <div>{Comentario}</div>
      </div>
      <div className="Separador"></div>
      <div className="ContenedorEstrellas flex m-auto align-items-center justify-content-center">
        {ColocarCompleteStart()}
        {cantStartsDecimal !== 0 && (
          <i class="fa-regular fa-star-half-stroke"></i>
        )}
        {ColocarIncompleteStart()}
      </div>
      <div className="ContenedorExtra">{parseFloat(Starts).toFixed(1)}</div>
    </div>
  );
}
