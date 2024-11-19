import React, { useContext, useEffect, useState } from "react";
import { Checkbox } from 'primereact/checkbox';
import './Style/PageCatalogo.css'
import { DataContext } from '../../data/Data'
import CardTipo01 from "../../components/Cards/cardTipo01";
import { Slider } from "primereact/slider";
import PopUpCotizacion from "./Components/PopUpCotizacion/PopUpCotizacion";

export default function PageCatalogo() {
    const { Categorias, Productos } = useContext(DataContext);
    // const [CantProductos, setCantProductos]
    const [ActivarFiltros, setActivarFiltros] = useState(false);
    const [value, setValue] = useState([0, 100]);
    const [ValorAlto, setValorAlto] = useState(0.00);

    useEffect(() => {
        if (Productos && Productos.length > 0) {
            // Encontrar el precio máximo en la lista de productos
            const maxPrecio = Math.max(...Productos.map(product => parseFloat(product.Precio)));

            // Actualizar el estado con el precio máximo y los filtros
            setValorAlto(maxPrecio);
            setFiltroPrecios([
                parseFloat((value[0] * maxPrecio) / 100).toFixed(1),
                parseFloat((value[1] * maxPrecio) / 100).toFixed(1)
            ]);
        }
    }, [Productos, value]); // Asegúrate de incluir 'value' como dependencia si afecta los cálculos


    const [FiltroNombre, setFiltroNombre] = useState('');
    const [FiltroCategorias, setFiltroCategorias] = useState([]);
    const [FiltroPrecios, setFiltroPrecios] = useState([0, 100]);

    useEffect(() => {
        setFiltroPrecios([
            parseFloat((value[0] * ValorAlto) / 100).toFixed(1),
            parseFloat((value[1] * ValorAlto) / 100).toFixed(1)
        ]);
    }, [value, ValorAlto]);


    const [BuscarCategoria, setBuscarCategoria] = useState('');
    useEffect(() => {
        setFiltroCategorias([])
    }, [BuscarCategoria])

    const [PopupCotizacion, setPopupCotizacion] = useState(false);
    const [ProductoPopUpSele, setProductoPopUpSele] = useState(null);
    const AbrirPopUpCotizacion = (product) => {
        setProductoPopUpSele(product);
        setPopupCotizacion(true);
    }

    return (
        <div className="PageCatalogo w-full p-4 pt-8 flex gap-2 justify-content-end">
            <div className={`Filtros ${ActivarFiltros ? 'ActivoFiltros' : ''}`}>
                <button
                    className={`BtnActiveFiltro ${ActivarFiltros ? 'ActivoFiltros' : ''}`} onClick={() => { ActivarFiltros ? setActivarFiltros(false) : setActivarFiltros(true) }}>
                    <i class="fa-solid fa-caret-right"></i>
                </button>
                <div className="ContenidoFiltros w-full h-full flex flex-column gap-3 align-items-center justify-content-start pt-4 pb-6">
                    <div className="OneFiltro flex flex-column gap-1 p-2">
                        <div className="Titulo">NOMBRE:</div>
                        <div className="Input">
                            <input type="text"
                                placeholder="Buscar Producto"
                                value={FiltroNombre}
                                onChange={(e) => { setFiltroNombre(e.target.value) }} />
                        </div>
                    </div>
                    <div className="OneFiltro flex flex-column gap-1 p-2">
                        <div className="Titulo">CATEGORIAS:</div>
                        <div className="Input flex flex-column gap-2">
                            <div className="Buscador relative flex align-items-center justify-content-center">
                                <input
                                    type="text"
                                    value={BuscarCategoria}
                                    onChange={(e) => { setBuscarCategoria(e.target.value) }}
                                    className="pr-5"
                                    placeholder="Buscar Categoria"
                                />
                                <i class="fa-solid fa-magnifying-glass absolute"></i>
                            </div>
                            <div className="Categorias flex flex-column gap-1">
                                {Categorias?.map((item) => {

                                    if (BuscarCategoria != '') {
                                        if (item.nombre.includes(BuscarCategoria)) {
                                            return (
                                                <div className="flex align-items-center justify-content-start gap-2">
                                                    <Checkbox
                                                        onChange={() => {
                                                            setFiltroCategorias(prev =>
                                                                prev?.includes(item.id)
                                                                    ?
                                                                    prev?.filter(id => id !== item.id)
                                                                    : [...prev, item.id]
                                                            );
                                                        }}
                                                        checked={FiltroCategorias?.includes(item.id)}
                                                    />
                                                    {item.nombre}
                                                </div>
                                            )
                                        }
                                    } else if (BuscarCategoria == '') {
                                        return (
                                            <div className="flex align-items-center justify-content-start gap-2">
                                                <Checkbox
                                                    onChange={() => {
                                                        setFiltroCategorias(prev =>
                                                            prev?.includes(item.id)
                                                                ?
                                                                prev?.filter(id => id !== item.id)
                                                                : [...prev, item.id]
                                                        );
                                                    }}
                                                    checked={FiltroCategorias?.includes(item.id)}
                                                />
                                                {item.nombre}
                                            </div>
                                        )
                                    }

                                })}
                            </div>
                        </div>
                    </div>
                    <div className="OneFiltro flex flex-column gap-1 p-2">
                        <div className="Titulo">PRECIO:</div>
                        <div className="Input Precio">
                            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-10 m-auto" range />
                        </div>
                        <style>
                            {`
                            .PageCatalogo .Filtros .ContenidoFiltros .OneFiltro .Input.Precio .p-slider span.p-slider-handle:nth-child(2),
                            .PageCatalogo .Filtros .ContenidoFiltros .OneFiltro .Input.Precio .p-slider span.p-slider-handle:nth-child(3){
                            display: flex;
                            align-items:center;
                            justify-content: center;
                            }
                            .PageCatalogo .Filtros .ContenidoFiltros .OneFiltro .Input.Precio .p-slider span.p-slider-handle:nth-child(2)::before {
                                content:'${((value[0] * ValorAlto) / 100).toFixed(1)}';
                                background-color: #116311;
                                font-size: 13px;
                                color: white;
                                padding: 4px;
                                border-radius: 5px;
                                position: relative;
                                bottom: -25px;
                            }
                                .PageCatalogo .Filtros .ContenidoFiltros .OneFiltro .Input.Precio .p-slider span.p-slider-handle:nth-child(3)::before {
                                content:'${((value[1] * ValorAlto) / 100).toFixed(1)}';
                                background-color: #116311;
                                font-size: 13px;
                                color: white;
                                padding: 4px;
                                border-radius: 5px;
                                position: relative;
                                bottom: -25px;
                            }
                            `}
                        </style>
                    </div>

                </div>
            </div>



            <div className={`Contenido ${ActivarFiltros ? 'ActivoFiltros' : ''} flex flex-wrap w-full pl-5 gap-3`}>
                {Productos?.map((product) => {
                    const Nombre = FiltroNombre != '' ? product?.Nombre.includes(FiltroNombre) : true;


                    const PrecioMin = parseFloat(Math.min(...FiltroPrecios));
                    const PrecioMax = parseFloat(Math.max(...FiltroPrecios));
                    const PrecioProd = parseFloat(product.Precio);

                    const Precio = PrecioProd >= PrecioMin && PrecioProd <= PrecioMax;

                    let Categoria = true;

                    if (FiltroCategorias.length > 0) {
                        Categoria = product?.Categorias.some(categ => FiltroCategorias.includes(categ));
                    }

                    const Oferta = product.Oferta && product?.Oferta != 0 ? false : true;

                    if (Nombre && Precio && Categoria && Oferta) {
                        return (
                            <>
                                <CardTipo01
                                    Producto={product}
                                    Funcion={AbrirPopUpCotizacion}
                                />
                            </>
                        )
                    }
                })}
            </div>
            <PopUpCotizacion
                Active={PopupCotizacion}
                setActive={setPopupCotizacion}
                Product={ProductoPopUpSele}
            />
        </div>
    )
}