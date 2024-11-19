import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/stylesComponents/Navbar/Navbar.css';
import Logo from '../../img/Logo.png';
export default function Navbar({ Accesos }) {

    return (
        <div className="ClassNavBar w-full fixed flex align-items-center justify-content-center pt-4 pb-3 pr-4 pl-4">
            <div className='ContenedorNavBar w-full flex align-items-center justify-content-between pr-3'>
                <div className='SeccionIcon h-full flex gap-2 align-items-center justify-content-center'>
                    <img src={Logo} alt="" />
                    <div className='Welcome'>BIENVENIDOS</div>
                </div>
                <div className='SeccionRutas flex gap-6'>
                    {Accesos.map((item) => (
                        <Link to={item.Ruta} className='flex flex-column align-items-center justify-content-center'>
                            {item.Name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
