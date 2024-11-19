import React, { useState, useEffect } from "react";
import '../../styles/stylesComponents/Dialogs/DialogVerProducto.css'
import { Dialog } from 'primereact/dialog';
import CarruselImgProducto from "../Carrusel/CarruselIMG";
import ImgSelect from "../Carrusel/ImgSelect";
import Tags from "../Tags/Tags";
import { Button } from 'primereact/button';

export default function DialogVerProducto({ Open, setOpen }) {

    const ContentCarruselIMG = [
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/i/m/impresora-epson-l4260-duplex-53575-default-1.jpg",
        "https://cusco.solutekla.com/photo/1/epson/impresoras/impresora_multifuncional_epson_l380/impresora_multifuncional_epson_l380_0001",
        "https://oechsle.vteximg.com.br/arquivos/ids/14861363-1000-1000/image-9bda97a946b243f2b4cad46d22e42cf8.jpg?v=638281526434700000",
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/i/m/impresora-epson-l4260-duplex-53575-default-1.jpg",
        "https://cusco.solutekla.com/photo/1/epson/impresoras/impresora_multifuncional_epson_l380/impresora_multifuncional_epson_l380_0001",
        "https://oechsle.vteximg.com.br/arquivos/ids/14861363-1000-1000/image-9bda97a946b243f2b4cad46d22e42cf8.jpg?v=638281526434700000",
    ]
    const [imgSelect, setImgSelect] = useState(0);
    useEffect(() => {
        setImgSelect(0)
    }, [Open])

    return (
        <Dialog visible={Open} onHide={() => { setOpen(false); }}>
            <div className="flex align-items-center justify-content-center p-3 DialogVerPRo">
                <CarruselImgProducto Elements={ContentCarruselIMG} ChangeImg={setImgSelect} />
                <ImgSelect Elements={ContentCarruselIMG} ImgSele={imgSelect}></ImgSelect>
                <div className="ViewProducto flex flex-column align-items-start flex-1 justify-content-center ml-4 gap-2">
                    <div className="tituloDialog">
                        Impresora Multifuncional<br />
                        EcoTank L3210
                    </div>
                    <div className="PrecioDialog">
                        s/. 123.00
                    </div>
                    <div className="w-full flex flex-wrap gap-1" style={{ maxWidth: '290px' }}>
                        <Tags Name={"Impresoras"} Icon={"print"} Color={"#1B84E4"} ColorText={"white"} />
                        <Tags Name={"Edge"} Icon={"bolt"} Color={"#1B23E4"} ColorText={"white"} />
                        <Tags Name={"Wifi"} Icon={"wifi"} Color={"#67E41B"} ColorText={"black"} />
                    </div>
                    <div className="flex gap-3">
                        <div className="CaracteristicasDialog flex flex-column align-items-start justify-content-center gap-2 pl-3">
                            <div>
                                Velocidad de Copiado ISO: Negro 7 cpm y color 1,7 cpm (A4/carta)
                            </div>
                            <div>
                                Tecnología de Impresión: Inyección de tinta Heat-FreeTM Micro Piezo de 4 colores (CMYK)
                            </div>
                            <div>
                                Resolución Máxima de Impresión: Hasta 5760 dpi x 1440 dpi
                            </div>
                            <div>
                                Tamaños de Papel Soportados: Estándar: A4, Carta, Oficio 9, Folio, Ejecutivo, Media Carta, A6, Foto, Sobres
                            </div>
                        </div>
                        <div className="ServiciosExtraDialog flex flex-column align-items-start justify-content-start gap-3">

                            <div className="OneServicio flex align-items-center justify-content-center">
                                <i className="pi pi-cog"></i>
                                <div className="Contenido flex flex-column align-items-start justify-content-center">
                                    <div className="Titulo">Instalación</div>
                                    <div className="Content">Servicio de instalación incluida</div>
                                </div>
                            </div>

                            <div className="OneServicio flex align-items-center justify-content-center">
                                <i className="pi pi-cog"></i>
                                <div className="Contenido flex flex-column align-items-start justify-content-center">
                                    <div className="Titulo">Instalación</div>
                                    <div className="Content">Servicio de instalación incluida</div>
                                </div>
                            </div>

                            <div className="OneServicio flex align-items-center justify-content-center">
                                <i className="pi pi-cog"></i>
                                <div className="Contenido flex flex-column align-items-start justify-content-center">
                                    <div className="Titulo">Instalación</div>
                                    <div className="Content">Servicio de instalación incluida</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="ButtonDialog flex w-full align-items-center justify-content-center">
                        <Button label="COTIZAR" icon="pi pi-cart-plus" />
                    </div>
                </div>
            </div>
        </Dialog>
    );
}
