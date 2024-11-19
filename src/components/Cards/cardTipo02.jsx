import React, { useState } from "react";
import '../../styles/stylesComponents/cardTipo02.css'
import { Button } from 'primereact/button';
import PrecioOferta from "../precioOferta";

export default function CardTipo02() {

    const ClickInfo = () => {
    };

    return (
        <div className='cardTipo02'>
            <div className='front'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtFQc9va4Jqn7tMB6Qj46k5-6rS-quMU0yxA&s" alt="producto388" />
                <div className="NombreProod">Fotocopiadora sks</div>
                <img src="https://www.ept.ca/wp-content/uploads/2018/05/toshiba-logo.png" alt="" />
            </div>
            <div className='back'>
                <div className="w-full h-full relative flex align-items-center justify-content-start gap-1 flex-column" style={{ paddingTop: '20px' }}>
                    <img className="absolute" src="https://www.ept.ca/wp-content/uploads/2018/05/toshiba-logo.png" alt="" />
                    <div className="Nombre">
                        <div>Fotocopiadora sks</div>
                        <div>34i2 ajkha sajupsa</div>
                    </div>
                    <div className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, perferendis deleniti laudantium exercitationem, corporis impedit accusamus maxime soluta cupiditate minima quod excepturi? Earum, vero? Enim quibusdam fugit blanditiis est necessitatibus!
                    </div>
                    <PrecioOferta Descuento='14.4' PrecioBase='10324' Color='white'></PrecioOferta>
                    <Button className="" label="Ver info" onClick={ClickInfo} />
                </div>
            </div>
        </div>
    );
}