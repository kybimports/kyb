import React, { useState, useContext, useEffect } from "react";
import '../../Style/PopUpCotizacion.css'
import { Dialog } from 'primereact/dialog';
import CarruselGeneral from '../../../../components/Carrusel/CarruselGeneral';
import ImgSelect from "../../../../components/Carrusel/ImgSelect";
import CarruselImgProducto from "../../../../components/Carrusel/CarruselIMG";
import Tags from '../../../../components/Tags/Tags'
import DataContext from "../../../../data/Data";

export default function PopUpCotizacion({ Active, setActive, Product }) {
    const { Etiquetas } = useContext(DataContext);
    const [ImgSeleccionado, setImgSeleccionado] = useState(0);

    const headerDialog = () => {
        return (
            <div className="headerDialogCotizacion flex gap-2">
                <i class="fa-regular fa-credit-card-front"></i>
                <div className="Titulos flex flex-column gap-1 align-items-start justify-content-center">
                    <div>Cotizacion de productos</div>
                    <div>
                        Por medio usted podra contactarnos para poder cotizar el producto que selecciono
                    </div>
                </div>
            </div>
        )
    }
    const [UrlEnvio, setUrlEnvio] = useState('');

    useEffect(() => {
        if (Product?.Oferta > 0) {
            setUrlEnvio(
                `whatsapp://send?phone=988674943&text=Buenas%20estoy%20interesado%20en%20esta%20oferta%20del%20${Product?.Oferta}%%20de%20descuento%20en%20este%20producto:%0A${Product?.Nombre}%0APrecio:%20s/.${Product?.Precio}%0APrecio%20(Desc.):%20s/.${(Product?.Precio-((Product?.Precio*Product?.Oferta)/100)).toFixed(2)}%0AImagen%20del%20producto:%0A${Product?.Img[0]?.Url}`
            );
        } else {
            setUrlEnvio(
                `whatsapp://send?phone=988674943&text=Buenas%20estoy%20interesado%20en%20el%20producto:%0A${Product?.Nombre}%0APrecio:%20s/.${Product?.Precio}%0AImagen%20del%20producto:%0A${Product?.Img[0]?.Url}`
            );
        }

    }, [Active, Product]);



    return (
        <Dialog
            visible={Active}
            header={headerDialog}
            onHide={() => { setActive(false) }}>

            <div className="flex gap-3 PopUpCotizacion">
                <div className="flex align-items-start">
                    <CarruselImgProducto
                        Elements={Product?.Img}
                        Img={ImgSeleccionado}
                        ChangeImg={setImgSeleccionado}
                    />
                    <ImgSelect
                        Elements={Product?.Img}
                        ImgSele={ImgSeleccionado}
                    />
                </div>

                <div className="Contedido flex flex-column gap-1 align-items-start justify-content-start">
                    <div>{Product?.Nombre}</div>
                    <div className="relative flex align-items-center justify-content-start">
                        <div className="flex relative align-items-center justify-content-center">
                            s/.{Product?.Precio}
                            {Product?.Oferta && (
                                <div className="EtiquetaOferta flex align-items-center justify-content-center">
                                    <div className="flex align-items-center justify-content-center">
                                        <i class="fa-solid fa-certificate fa-beat"></i>
                                        <div>{(parseFloat(Product?.Oferta)).toFixed(1)}%
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                    {Product?.Oferta && (
                        <style>
                            {`
                            .PopUpCotizacion .Contedido>div:nth-child(2)>div::before{
                                content: '';
                                width: 100%;
                                height: 2px;
                                transform: rotate(350deg);
                                background-color: red;
                                position: absolute;
                            }
                                .PopUpCotizacion .Contedido>div:nth-child(2)>div::after{
                                content: '${(Product?.Precio - (Product?.Precio * Product?.Oferta) / 100).toFixed(1)}';
                                color: red;
                                font-weight: 400;
                                font-size: 13px;
                                position: absolute;
                                right: 0px;
                                top: -10px;
                            }
                            `}
                        </style>
                    )}
                    <div className="Etiquetas flex flex-wrap gap-1">
                        {Etiquetas?.map((etiqueta) => {
                            for (let index = 0; index < Product?.Tags?.length; index++) {
                                if (etiqueta.id == Product?.Tags[index]) {
                                    return (
                                        <Tags TagObject={etiqueta} />
                                    )
                                }
                            }
                        })}

                    </div>
                    <div className="Propiedades flex flex-column gap-1">
                        {Product?.Propiedades.map((items) => {
                            return (
                                <div>{items}</div>
                            )
                        })}
                    </div>
                    <button className="BtnContacto m-auto w-9 flex align-items-center justify-content-center gap-2"
                        onClick={() => { window.location.href = UrlEnvio }}>
                        <i class="fa-brands fa-whatsapp fa-beat"></i>
                        <p>Comprar</p>
                    </button>
                </div>
            </div>


        </Dialog >
    )
}