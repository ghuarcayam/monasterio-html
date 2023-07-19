import './App.css';
import React, { useState, useEffect } from 'react';
import { Steps } from 'primereact/steps';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';
import { SelectButton } from 'primereact/selectbutton';
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Sidebar } from 'primereact/sidebar';
import { Password } from 'primereact/password';

function ContentHTML() {

    const items = [
        {
            label: 'Productos'
        },
        {
            label: 'Pago'
        },
        {
            label: 'Confirmación'
        },
        //{
        //    label: 'Sobre la visita'
        //},
        //{
        //    label: 'Información adicional'
        //}
    ];
    const [images, setImages] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then((data: any) => setImages(data));
    }, [])

    const itemTemplate = (item: any) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item: any) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    const options = ['Boleta', 'Factura'];
    const [value, setValue] = useState(options[0]);


    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const selectedCountryTemplate = (option: any, props: any) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option: any) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };



    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];


    const [checked, setChecked] = useState(false);



    const [date, setDate] = useState(null);




    const [visibleRight, setVisibleRight] = useState(false);



    return (
        <>
            <div id="MAIL-RB" className="hidden">
                <div style={{ backgroundColor: "#fff", position: "fixed", width: "100%", height: "100%", top: "0", left: "0", zIndex: "1001", fontSize: "16px", overflowY: "auto" }}>
                    {/* HEADER */}
                    <div style={{ backgroundColor: "#020202", width: "100%", padding: "16px 0 12px 0", textAlign: "center" }}>
                        <img style={{ maxWidth: "260px", }} src="logo-2-white.svg" />
                    </div>
                    {/* CONTENT TOP */}
                    <div style={{ padding: "40px 24px" }}>
                        {/* GREETING CUSTOMER */}
                        <div style={{ fontSize: "19px", width: "100%", display: "inline-block" }}>
                            <img style={{ width: "48px", float: "left", clear: "right", marginRight: "12px" }} src="icon-hand.svg" />
                            <div style={{ float: "left", clear: "right" }}>
                                <div style={{ fontWeight: "500" }}>Hola Usuario!</div>
                                <div style={{}}>gracias por tu compra</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "inline-block", height: "32px" }}></div>
                        {/* DATOS DE LA ORDEN */}
                        <div style={{ width: "100%", display: "inline-block" }}>
                            <div style={{ fontSize: "13px", fontWeight: "600", textTransform: "uppercase", opacity: ".48", marginBottom: "10px" }}>
                                Datos de la orden
                            </div>
                            <div style={{}}>
                                <div style={{ color: "#E9603C", fontWeight: "700", fontSize: "21px", marginBottom: "12px" }}>Orden #204849850</div>
                            </div>
                            <div style={{ marginBottom: "8px" }}>
                                <div style={{}}>Fecha y hora de compra</div>
                                <div style={{ fontWeight: "500", lineHeight: "24px" }}>00/00/2023 a las 00:00 am</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "inline-block", height: "32px" }}></div>
                        {/* DATOS DEL CLIENTE */}
                        <div style={{ width: "100%", display: "inline-block" }}>
                            <div style={{ fontSize: "13px", fontWeight: "600", textTransform: "uppercase", opacity: ".48", marginBottom: "10px" }}>
                                Datos del cliente
                            </div>
                            <div style={{}}>
                                <div style={{}}>
                                    <div style={{ fontWeight: "500", fontSize: "19px", marginBottom: "12px" }}>Nombre Nombre Apellido Apellido</div>
                                </div>
                                <div style={{ marginBottom: "8px" }}>
                                    <div style={{}}>Documento de identidad</div>
                                    <div style={{ fontWeight: "500", lineHeight: "24px" }}>DNI 73326399</div>
                                </div>
                                <div style={{ marginBottom: "8px" }}>
                                    <div style={{}}>Correo electrónico</div>
                                    <div style={{ fontWeight: "500", lineHeight: "24px" }}>visitante@gmail.com</div>
                                </div>
                                <div style={{}}>
                                    <div style={{}}>Teléfono</div>
                                    <div style={{ fontWeight: "500", lineHeight: "24px" }}>961845682</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "inline-block", height: "32px" }}></div>
                        {/* PRODUCTOS */}
                        <div style={{ width: "100%", display: "inline-block" }}>
                            <div style={{ fontSize: "13px", fontWeight: "600", textTransform: "uppercase", opacity: ".48", marginBottom: "16px" }}>
                                Productos (2)
                            </div>
                            <div style={{}}>
                                <div style={{ width: "100%", display: "inline-block", borderBottom: "1px solid #ccc", paddingBottom: "12px", marginBottom: "12px" }}>
                                    <div style={{ float: "left", clear: "right" }}>
                                        <img style={{ width: "80px", borderRadius: "8px" }} src="cover-visit-1.png" />
                                    </div>
                                    <div style={{ width: "calc(100% - 90px)", float: "right", clear: "right" }}>
                                        <div style={{ width: "calc(100% - 80px)", float: "left", clear: "right" }}>
                                            <div style={{ width: "100%", display: "inline-block", fontWeight: "700", fontSize: "17px", marginBottom: "4px" }}>Visita estándard
                                            </div>
                                            <div style={{ width: "100%", display: "inline-block", marginBottom: "4px" }}><div style={{ float: "left", marginRight: "4px", fontWeight: "500" }}>Día:</div> 00/00/2023
                                            </div>
                                            <div style={{ width: "100%", display: "inline-block", marginBottom: "4px" }}><div style={{ float: "left", marginRight: "4px", fontWeight: "500" }}>Hora:</div> 10:00 am
                                            </div>
                                            <div style={{ width: "100%", display: "inline-block" }}><div style={{ float: "left", marginRight: "4px", fontWeight: "500" }}>Cant. de visitantes:</div> 8
                                            </div>
                                        </div>
                                        <div style={{ width: "80px", float: "right", clear: "right", textAlign: "right", fontSize: "17px", fontWeight: "700" }}>
                                            <div>S/ 100.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "100%", display: "inline-block", borderBottom: "1px solid #ccc", paddingBottom: "12px", marginBottom: "12px" }}>
                                    <div style={{ float: "left", clear: "right" }}>
                                        <img style={{ width: "80px", borderRadius: "8px" }} src="cover-visit-1.png" />
                                    </div>
                                    <div style={{ width: "calc(100% - 90px)", float: "right", clear: "right" }}>
                                        <div style={{ width: "calc(100% - 80px)", float: "left", clear: "right" }}>
                                            <div style={{ width: "100%", display: "inline-block", fontWeight: "700", fontSize: "17px", marginBottom: "4px" }}>Video
                                            </div>
                                            <div style={{ width: "100%", display: "inline-block", marginBottom: "4px" }}><div style={{ float: "left", marginRight: "4px", fontWeight: "500" }}>Cant:</div> 1
                                            </div>
                                        </div>
                                        <div style={{ width: "80px", float: "right", clear: "right", textAlign: "right", fontSize: "17px", fontWeight: "700" }}>
                                            <div>S/ 100.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "100%", display: "inline-block" }}>
                                    <div style={{ width: "100%", display: "inline-block", marginBottom: "6px" }}>
                                        <div style={{ width: "50%", float: "left", clear: "right" }}>Sub total
                                        </div>
                                        <div style={{ width: "50%", float: "left", clear: "right", textAlign: "right" }}>S/ 100.00
                                        </div>
                                    </div>
                                    <div style={{ width: "100%", display: "inline-block", marginBottom: "6px" }}>
                                        <div style={{ width: "50%", float: "left", clear: "right" }}>Descuento
                                        </div>
                                        <div style={{ width: "50%", float: "left", clear: "right", textAlign: "right" }}>S/ 100.00
                                        </div>
                                    </div>
                                    <div style={{ width: "100%", display: "inline-block", fontWeight: "700", fontSize: "18px" }}>
                                        <div style={{ width: "50%", float: "left", clear: "right" }}>Total
                                        </div>
                                        <div style={{ width: "50%", float: "left", clear: "right", textAlign: "right" }}>S/ 100.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "inline-block", height: "32px" }}></div>
                        {/* DATOS DE PAGO */}
                        <div style={{ width: "100%", display: "inline-block" }}>
                            <div style={{ fontSize: "13px", fontWeight: "600", textTransform: "uppercase", opacity: ".48", marginBottom: "16px" }}>
                                Datos de pago
                            </div>
                            <div style={{}}>
                                <div style={{ width: "100%", display: "inline-block" }}>
                                    <div style={{ float: "left", clear: "right" }}>
                                        <img style={{ width: "48px", borderRadius: "8px" }} src="logo-visa.png" />
                                    </div>
                                    <div style={{ width: "calc(100% - 58px)", float: "right", clear: "right" }}>
                                        <div style={{ width: "100%", display: "inline-block", fontWeight: "700", fontSize: "17px", marginBottom: "4px" }}>**** **** **** 6987
                                        </div>
                                        <div style={{ width: "100%", display: "inline-block", marginBottom: "4px" }}>Sin cuotas
                                        </div>
                                        <div style={{ width: "100%", display: "inline-block", marginBottom: "4px" }}><div style={{ float: "left", marginRight: "4px", fontWeight: "500" }}>ID operación</div> #02474984467
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "inline-block", height: "32px" }}></div>
                        {/* DATOS DE FACTURACIÓN */}
                        <div style={{ width: "100%", display: "inline-block" }}>
                            <div style={{ fontSize: "13px", fontWeight: "600", textTransform: "uppercase", opacity: ".48", marginBottom: "10px" }}>
                                Datos de facturación
                            </div>
                            <div style={{}}>
                                <div style={{}}>
                                    <div style={{ fontWeight: "500", fontSize: "19px", marginBottom: "12px" }}>Nombre de la Agencia SAC</div>
                                </div>
                                <div style={{ marginBottom: "8px" }}>
                                    <div style={{}}>Documento de identidad</div>
                                    <div style={{ fontWeight: "500", lineHeight: "24px" }}>RUC 20548707520</div>
                                </div>
                                <div style={{}}>
                                    <div style={{}}>Dirección</div>
                                    <div style={{ fontWeight: "500", lineHeight: "24px" }}>Av. Dirección 6798</div>
                                    <div style={{ fontWeight: "500", lineHeight: "24px" }}>Distrito - Provincia - Departamento</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CONTENT BOTTOM */}
                    <div style={{ padding: "40px 24px", backgroundColor: "#f2f2f2" }}>
                        {/* RECUERDA */}
                        <div style={{ width: "100%", display: "inline-block" }}>
                            <div style={{ fontWeight: "700", opacity: ".8", marginBottom: "10px" }}>
                                Recuerda
                            </div>
                            <div style={{ fontSize: "15px", textAlign: "justify", marginBottom: "6px" }}>
                                ¡Sin colas! Dirígete directamente a la sala o a la zona de despacho online en la Dulcería para recoger tu combo. No necesitas pasar por boletería.
                            </div>
                            <div style={{ fontSize: "15px", textAlign: "justify", marginBottom: "6px" }}>
                                ¡Sin colas! Dirígete directamente a la sala o a la zona de despacho online en la Dulcería para recoger tu combo. No necesitas pasar por boletería.
                            </div>
                            <div style={{ fontSize: "15px", textAlign: "justify", marginBottom: "6px" }}>
                                ¡Sin colas! Dirígete directamente a la sala o a la zona de despacho online en la Dulcería para recoger tu combo. No necesitas pasar por boletería.
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "inline-block", height: "32px" }}></div>
                        {/* CONDICIONES DE COMPRA */}
                        <div style={{ width: "100%", display: "inline-block" }}>
                            <div style={{ fontWeight: "700", opacity: ".8", marginBottom: "10px" }}>
                                Condiciones de compra
                            </div>
                            <div style={{ fontSize: "15px", textAlign: "justify", marginBottom: "6px" }}>
                                ¡Sin colas! Dirígete directamente a la sala o a la zona de despacho online en la Dulcería para recoger tu combo. No necesitas pasar por boletería.
                            </div>
                            <div style={{ fontSize: "15px", textAlign: "justify", marginBottom: "6px" }}>
                                ¡Sin colas! Dirígete directamente a la sala o a la zona de despacho online en la Dulcería para recoger tu combo. No necesitas pasar por boletería.
                            </div>
                            <div style={{ fontSize: "15px", textAlign: "justify", marginBottom: "6px" }}>
                                ¡Sin colas! Dirígete directamente a la sala o a la zona de despacho online en la Dulcería para recoger tu combo. No necesitas pasar por boletería.
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "inline-block", height: "32px" }}></div>
                        {/* CONDICIONES DE COMPRA */}
                        <div style={{ width: "100%", display: "inline-block" }}>
                            <div style={{ fontWeight: "700", opacity: ".8", marginBottom: "10px" }}>
                                Estimado cliente
                            </div>
                            <div style={{ fontSize: "15px", textAlign: "justify", marginBottom: "6px" }}>
                                ¡Sin colas! Dirígete directamente a la sala o a la zona de despacho online en la Dulcería para recoger tu combo. No necesitas pasar por boletería.
                            </div>
                            <div style={{ fontSize: "15px", textAlign: "justify", marginBottom: "6px" }}>
                                ¡Sin colas! Dirígete directamente a la sala o a la zona de despacho online en la Dulcería para recoger tu combo. No necesitas pasar por boletería.
                            </div>
                            <div style={{ fontSize: "15px", textAlign: "justify", marginBottom: "6px" }}>
                                ¡Sin colas! Dirígete directamente a la sala o a la zona de despacho online en la Dulcería para recoger tu combo. No necesitas pasar por boletería.
                            </div>
                        </div>
                    </div>
                    {/* FOOTER */}
                    <div style={{ padding: "40px 24px", backgroundColor: "#020202", color: "#fff" }}>
                        <div style={{ width: "100%", display: "inline-block" }}>
                            <div style={{ fontWeight: "700", marginBottom: "24px" }}>
                                Sobre la compra
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <a style={{ color: "#fff", fontWeight: "400" }} href="#">Política de devoluciones</a>
                            </div>
                            <div style={{}}>
                                <a style={{ color: "#fff", fontWeight: "400" }} href="#">Términos y condicionesa</a>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "inline-block", height: "32px" }}></div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                            <div style={{ fontWeight: "700", marginBottom: "24px" }}>
                                Contáctanos
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <a style={{ color: "#fff", fontWeight: "400" }} href="#">51 - 54 221213</a>
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <a style={{ color: "#fff", fontWeight: "400" }} href="#">51 - 54 221234</a>
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <a style={{ color: "#fff", fontWeight: "400" }} href="#">51 - 54 221235</a>
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <a style={{ color: "#fff", fontWeight: "400" }} href="#">informes@santacatalina.org.pe</a>
                            </div>
                            <div style={{}}>
                                <a style={{ color: "#fff", fontWeight: "400" }} href="#">Santa Catalina 301 – Arequipa – Perú</a>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "inline-block", height: "32px" }}></div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                            <div style={{ fontWeight: "700", marginBottom: "24px" }}>
                                Síguenos
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <a style={{}} href="#"><img style={{ width: "40px", float: "left", clear: "right", marginRight: "12px" }} src="icon-facebook.svg" /></a>
                                <a style={{}} href="#"><img style={{ width: "40px", float: "left", clear: "right", marginRight: "12px" }} src="icon-instagram.svg" /></a>
                                <a style={{}} href="#"><img style={{ width: "40px" }} src="icon-youtube.svg" /></a>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "inline-block", height: "32px" }}></div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                            <div style={{ fontWeight: "400", opacity: ".6" }}>
                                © 2020 - Monasterio de Santa Catalina
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="SPLASH-RB" className="hidden">
                <div className="splash-rb fixed w-full h-full top-0 left-0 text-center z-3">
                    <img className="logo-splash" src="logo-monasterio-white.svg" />
                </div>
            </div>
            <div id="HOME-RB" className="hidden">
                <div className="container-rb pt-4">
                    <div className="grid m-0 pt-7 pb-3">
                        <div className="col-12 text-center">
                            <img className="logo w-10 md:hidden" src="logo-monasterio.svg" />
                            <img className="logo-2 hidden w-8 md:inline-block" src="logo-2.svg" />
                            <h1 className="text-xl md:text-4xl">¡Una ciudad dentro de la ciudad!</h1>
                            <p className="md:text-lg">Visita el mayor atractivo turístico de Arequipa, más de 400 años de historia y cultura.</p>
                        </div>
                    </div>
                    <div className="grid m-0 pb-6 flex align-items-stretch flex-wrap">
                        <div className="col-12 md:col-4 flex align-items-center justify-content-center">
                            <div className="itemVisit shadow-2 cursor-pointer">
                                <div className="topItemVisit flex align-items-center">
                                    <img className="" src="visita-presencial.png" />
                                </div>
                                <div className="bottomItemVisit flex align-items-center p-3">
                                    <h3 className="flex-1 my-0">Visita presencial</h3>
                                    <Button className="flex" icon="pi pi-arrow-right" rounded text aria-label="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="itemVisit shadow-2 cursor-pointer">
                                <div className="topItemVisit flex align-items-center">
                                    <img className="" src="visita-nocturna.png" />
                                </div>
                                <div className="bottomItemVisit flex align-items-center p-3">
                                    <h3 className="flex-1 my-0">Visita nocturna</h3>
                                    <Button className="flex" icon="pi pi-arrow-right" rounded text aria-label="" />
                                </div>
                            </div>
                            <div className="itemVisit shadow-2 cursor-pointer mt-3">
                                <div className="topItemVisit flex align-items-center">
                                    <img className="" src="visita-peruanos.png" />
                                </div>
                                <div className="bottomItemVisit flex align-items-center p-3">
                                    <h3 className="flex-1 my-0">Visita de la peruanidad</h3>
                                    <Button className="flex" icon="pi pi-arrow-right" rounded text aria-label="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-4 flex align-items-center justify-content-center">
                            <div className="itemVisit shadow-2 cursor-pointer">
                                <div className="topItemVisit flex align-items-center">
                                    <img className="" src="visita-teatralizada.png" />
                                </div>
                                <div className="bottomItemVisit flex align-items-center p-3">
                                    <h3 className="flex-1 my-0">Visita guiada teatralizada</h3>
                                    <Button className="flex" icon="pi pi-arrow-right" rounded text aria-label="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-rb bg-red">
                    <div className="grid m-0 py-6">
                        <div className="col-12 text-center md:col-4 md:col-offset-1">
                            <img className="w-10 md:w-full md:pr-4" src="laptop-video.png" />
                        </div>
                        <div className="col-10 col-offset-1 text-center md:col-6 md:text-left md:col-offset-0 pr-6">
                            <h3 className="text-white mt-1 md:mt-1 md:mb-2 md:text-3xl">Video: Puerta abierta entre 2 mundos</h3>
                            <p className="text-white font-bold mb-1">Compra un paseo virtual (peruanos S/ 20.00 y extranjeros $ 8.00)</p>
                            <p className="text-white mt-1">Contiene 7 capítulos sobre la fascinante historia del Monasterio de Santa Catalina – Único en el mundo con ciudadela – ubicado en Arequipa (Perú), una ciudad considerada por la UNESCO como Patrimonio Cultural de la Humanidad.</p>
                            <Button className="font-semibold" icon="pi pi-cart-plus" label="Agregar al carrito" text raised />
                        </div>
                    </div>
                </div>
                <div className="container-rb">
                    <div className="grid m-0">
                        <div className="col-12 md:col-10 md:col-offset-1">
                            <h3 className="text-center md:text-3xl">Preguntas frecuentes</h3>
                            <Accordion activeIndex={0}>
                                <AccordionTab header="No pude utilizar mi entrada por motivos de fuerza mayor, ¿la puedo utilizar en otra fecha?">
                                    <p className="m-0">
                                        Sí podrá hacerlo dentro de los 11 meses siguientes a su compra. Las entradas compradas para día con promoción para peruanos podrán ser utilizadas solamente en los días con promoción (día 10 y último domingo de cada mes).
                                    </p>
                                </AccordionTab>
                                <AccordionTab header="No me han llegado mis entradas, ¿cuándo me las van a enviar?">
                                    <p className="m-0">
                                        No enviamos entradas, podrá ingresar con el código QR que ha llegado a tu correo.
                                    </p>
                                </AccordionTab>
                                <AccordionTab header="¿Si tengo carnet de extranjería puedo acceder al precio con promoción para peruanos?">
                                    <p className="m-0">
                                        Sí, tiene que presentarlo en Portería al momento de ingresar.
                                    </p>
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <div id="DETAIL-RB" className="hidden">
                <div className="container-rb pt-7">
                    <div className="grid m-0 pt-7">
                        <div className="col-12 md:col-7 md:pr-4">
                            <div className="">
                                <Galleria value={images} numVisible={5} circular style={{ maxWidth: '100%' }}
                                    showItemNavigators showItemNavigatorsOnHover showIndicators
                                    showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
                            </div>
                            <div className="mt-3">
                                <TabView>
                                    <TabPanel header="Sobre la visita">
                                        <p className="mt-0 text-justify">
                                            La visita requiere de una hora como mínimo. El monasterio fue fundado en 1579, construido en sillar y tiene una extensión de más de 20,000 m2.
                                        </p>
                                        <p className="mt-0 text-justify">
                                            El servicio de guiado es opcional, no está incluido en el precio de la entrada, puedes contratar una guía especializada al momento de ingresar.
                                            Contamos con un aplicativo gratuito en castellano, inglés y francés, puedes descargarlo en tu celular haciendo <a href="#">click aquí.</a>
                                        </p>
                                        <p className="mt-0 text-justify">
                                            Contamos con WiFi gratis.
                                        </p>
                                    </TabPanel>
                                    <TabPanel header="Información general">
                                        <p className="mt-0 text-justify">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                                        </p>
                                    </TabPanel>
                                </TabView>
                            </div>
                        </div>
                        <div className="col-12 md:col-5">
                            <div className="shadow-2 border-round-xl">
                                <div className="formgrid grid mx-0 p-3 md:p-4">
                                    <div className="col-12 pb-4">
                                        <h3 className="mt-2 md:mt-0">Completa la siguiente información para continuar con la compra</h3>
                                        <span className="font-semibold">Ingresa la cantidad de visitantes</span>
                                    </div>
                                    <div className="field col-12">
                                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                            placeholder="Selecciona un circuito" className="w-full" />
                                    </div>
                                    <div className="field col-12">
                                        <Calendar value={date} className="w-full" />
                                    </div>
                                    <div className="field col-12">
                                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                            placeholder="Selecciona un horario" className="w-full" />
                                    </div>
                                    <div className="col-12 pt-3">
                                        <span className="font-semibold">Ingresa la cantidad de visitantes</span>
                                    </div>
                                    <div className="col-12 py-4 flex">
                                        <img className="mr-2" src="icon-peru.svg" /><span className="font-medium opacity-70">Visitantes peruanos</span><span className="opacity-70 ml-1">(1)</span>
                                    </div>
                                    <div className="field col-5 md:col-6">
                                        <span className="w-full inline-block font-semibold">Adultos</span>
                                        <span className="w-full inline-block text-sm opacity-80">S/ 40.00</span>
                                    </div>
                                    <div className="field col-7 md:col-6 flex">
                                        <Button className="flex mr-2" icon="pi pi-minus" rounded text aria-label="" />
                                        <InputText placeholder="0" className="w-full flex-1 text-center" />
                                        <Button className="flex ml-2" icon="pi pi-plus" rounded text aria-label="" />
                                    </div>
                                    <div className="field col-5 md:col-6">
                                        <span className="w-full inline-block font-semibold text-overflow-ellipsis overflow-hidden white-space-nowrap">Adultos mayores</span>
                                        <span className="w-full inline-block text-sm opacity-80">S/ 20.00</span>
                                    </div>
                                    <div className="field col-7 md:col-6 flex">
                                        <Button className="flex mr-2" icon="pi pi-minus" rounded text aria-label="" />
                                        <InputText placeholder="0" className="w-full flex-1 text-center" />
                                        <Button className="flex ml-2" icon="pi pi-plus" rounded text aria-label="" />
                                    </div>
                                    <div className="field col-5 md:col-6">
                                        <span className="w-full inline-block font-semibold">Universitarios</span>
                                        <span className="w-full inline-block text-sm opacity-80">S/ 12.00</span>
                                    </div>
                                    <div className="field col-7 md:col-6 flex">
                                        <Button className="flex mr-2" icon="pi pi-minus" rounded text aria-label="" />
                                        <InputText placeholder="0" className="w-full flex-1 text-center" />
                                        <Button className="flex ml-2" icon="pi pi-plus" rounded text aria-label="" />
                                    </div>
                                    <div className="field col-5 md:col-6">
                                        <span className="w-full inline-block font-semibold">Escolares</span>
                                        <span className="w-full inline-block text-sm opacity-80">S/ 6.00</span>
                                    </div>
                                    <div className="field col-7 md:col-6 flex">
                                        <Button className="flex mr-2" icon="pi pi-minus" rounded text aria-label="" />
                                        <InputText placeholder="0" className="w-full flex-1 text-center" />
                                        <Button className="flex ml-2" icon="pi pi-plus" rounded text aria-label="" />
                                    </div>
                                    <div className="field col-12">
                                        <div className="surface-100 border-round-lg p-3">
                                            <span className="mb-2 w-full inline-block">Indica un departamento origen</span>
                                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                                placeholder="Selecciona un departamento" className="w-full" />
                                        </div>
                                    </div>
                                    <div className="col-12 pt-2 pb-4 flex">
                                        <img className="mr-2" src="icon-extranjero.svg" /><span className="font-medium opacity-70">Visitantes extranjeros</span><span className="opacity-70 ml-1">(1)</span>
                                    </div>
                                    <div className="field col-5 md:col-6">
                                        <span className="w-full inline-block font-semibold">Adultos</span>
                                        <span className="w-full inline-block text-sm opacity-80">S/ 45.00</span>
                                    </div>
                                    <div className="field col-7 md:col-6 flex">
                                        <Button className="flex mr-2" icon="pi pi-minus" rounded text aria-label="" />
                                        <InputText placeholder="0" className="w-full flex-1 text-center" />
                                        <Button className="flex ml-2" icon="pi pi-plus" rounded text aria-label="" />
                                    </div>
                                    <div className="field col-5 md:col-6">
                                        <span className="w-full inline-block font-semibold">De 7 a 21 años</span>
                                        <span className="w-full inline-block text-sm opacity-80">S/ 25.00</span>
                                    </div>
                                    <div className="field col-7 md:col-6 flex">
                                        <Button className="flex mr-2" icon="pi pi-minus" rounded text aria-label="" />
                                        <InputText placeholder="0" className="w-full flex-1 text-center" />
                                        <Button className="flex ml-2" icon="pi pi-plus" rounded text aria-label="" />
                                    </div>
                                    <div className="field col-12">
                                        <div className="surface-100 border-round-lg p-3">
                                            <span className="mb-2 w-full inline-block">Indica un país origen</span>
                                            <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Selecciona un país"
                                                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid mx-0 p-3 border-top-1 border-300 md:p-4">
                                    <div className="col-7 text-lg font-medium">Costo de visita</div>
                                    <div className="col-5 text-lg font-semibold text-right">S/ 0.00</div>
                                    <div className="col-12">
                                        <Button className="font-semibold w-full" icon="pi pi-cart-plus" label="Agregar al carrito" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="CHECKOUT-1-RB" className="hidden">
                <div className="container-rb pt-7 pb-4 surface-100">
                    <Steps model={items} className="pt-7" />
                </div>
                <div className="container-rb pt-5">
                    <div className="grid m-0">
                        <div className="col-12 md:col-8 border-bottom-1 border-300 mb-3 pb-4 pt-0 md: mb-0 md:pb-0 md:pr-0 md:border-right-1 md:border-bottom-none">
                            <div className="grid mx-0 md:px-4">
                                <div className="col-12 pb-3 md:pb-4">
                                    <h3 className="my-0">Productos<span className="font-normal ml-1">(1)</span></h3>
                                </div>
                                <div className="col-12">
                                    <div className="grid mt-0 mx-0 p-2 shadow-2 border-round-xl md:p-3">
                                        <div className="col-12 py-0 flex align-items-center flex-wrap">
                                            <div className="flex-1 align-items-center justify-content-center font-medium text-lg">Visita estándard</div>
                                            <Button className="flex align-items-center justify-content-center" severity="secondary" icon="pi pi-trash" rounded text aria-label="" />
                                        </div>
                                        <div className="col-4 md:col-3 md:pb-0">
                                            <img className="w-full border-round-lg" src="cover-visit-1.png" />
                                        </div>
                                        <div className="col-8">
                                            <ul className="list-none m-0 p-0">
                                                <li className="pb-2"><span className="font-medium mr-1">Día:</span>15 de Julio 2023</li>
                                                <li className="pb-2"><span className="font-medium mr-1">Hora:</span>10:30 am</li>
                                                <li className="pb-2"><span className="font-medium mr-1">Cant. de visitantes:</span>8</li>
                                                <li className="flex align-items-center flex-wrap">
                                                    <Button className="flex align-items-center justify-content-center font-bold" label="editar" link />
                                                    <span className="flex-1 align-items-center justify-content-center text-right font-bold pt-1">S/ 180.00</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grid mt-4 mx-0 p-2 border-round-xl bg-red-16 md:p-3">
                                        <div className="col-12 py-0 flex align-items-center flex-wrap">
                                            <div className="flex-1 align-items-center justify-content-center font-medium text-lg">¿Deseas agregar el video?</div>
                                            <Button className="flex align-items-center justify-content-center" severity="secondary" icon="pi pi-times" rounded text aria-label="" />
                                        </div>
                                        <div className="col-4 md:col-3 md:pb-0">
                                            <img className="w-full border-round-lg" src="cover-visit-1.png" />
                                        </div>
                                        <div className="col-8">
                                            <ul className="list-none m-0 p-0">
                                                <li className="pb-2">Descripción o mensaje sobre la compra del video.</li>
                                                <li className="flex align-items-center flex-wrap pt-2">
                                                    <span className="flex align-items-center justify-content-center font-bold mr-3">S/ 180.00</span>
                                                    <Button className="flex align-items-center justify-content-center font-semibold" label="Agregar" outlined />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grid mt-2 mx-0 p-2 shadow-2 border-round-xl md:p-3">
                                        <div className="col-12 py-0 flex align-items-center flex-wrap">
                                            <div className="flex-1 align-items-center justify-content-center font-medium text-lg">Video-tour</div>
                                            <Button className="flex align-items-center justify-content-center" severity="secondary" icon="pi pi-trash" rounded text aria-label="" />
                                        </div>
                                        <div className="col-4 md:col-3 md:pb-0">
                                            <img className="w-full border-round-lg" src="cover-visit-1.png" />
                                        </div>
                                        <div className="col-8">
                                            <ul className="list-none m-0 p-0">
                                                <li className="pb-2"><span className="font-medium mr-1">Duración:</span>2 hrs</li>
                                                <li className="pb-2">Descripción o mensaje sobre la compra del video.</li>
                                                <li className="flex align-items-center flex-wrap">
                                                    <span className="flex-1 align-items-center justify-content-center text-right font-bold pt-1">S/ 180.00</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="grid mx-0 md:p-3 md:ml-4 md:shadow-2 border-round-xl">
                                <div className="col-12"><h3 className="my-2 md:mt-0">Resumen de la orden</h3></div>
                                <div className="col-7 text-lg font-medium">Total a pagar</div>
                                <div className="col-5 text-lg font-bold text-right">S/ 0.00</div>
                                <div className="col-12">
                                    <Button className="font-semibold w-full" size="large" icon="" label="Continuar con la compra" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="CHECKOUT-2-RB" className="hidden">
                <div className="container-rb pt-7 pb-4 surface-100">
                    <Steps model={items} className="pt-7" />
                </div>
                <div className="container-rb pt-5">
                    <div className="grid m-0">
                        <div className="col-12 md:col-8 border-bottom-1 border-300 mb-3 pb-4 pt-0 md: mb-0 md:pb-0 md:pr-0 md:border-right-1 md:border-bottom-none">
                            <div className="grid mx-0 md:px-4">
                                <div className="col-12 pb-3 md:pb-4">
                                    <h3 className="my-0">Pago</h3>
                                </div>
                                <div className="formgrid grid mx-0">
                                    <div className="col-12 pb-3">
                                        <span className="font-medium">Selecciona el comprobante que deseas</span>
                                    </div>
                                    <div className="field col-12 pb-3 flex md:col-7">
                                        <div className="opt-rb font-medium flex-1 py-1 border-round-sm text-center line-height-4 border-1 border-400 cursor-pointer">
                                            Boleta
                                        </div>
                                        <div className="opt-rb opt-selected-rb font-medium flex-1 py-1 border-round-sm text-center line-height-4 border-1 border-400 cursor-pointer ml-2 md:ml-3">
                                            Factura
                                        </div>
                                    </div>
                                    <div className="field col-12 pb-3">
                                        <div className="surface-100 border-round-xl w-full py-3 p-2 md:p-3">
                                            <div className="col-12 pt-1 pb-3">
                                                <span className="font-medium opacity-60">Datos de facturación</span>
                                            </div>
                                            <div className="col-12">
                                                <h3 className="mt-0 mb-2">Razón Social SAC</h3>
                                                <div className="py-1">RUC 20548707520</div>
                                                <div className="py-1">Av. Dirección Empresarial 6798</div>
                                                <div className="pt-1">Distrito, Provincia - Departamento</div>
                                                <div className="pt-3 flex justify-content-between flex-wrap">
                                                    <Button className="flex align-items-center justify-content-center font-bold" label="editar" link />
                                                    <Button className="flex align-items-center justify-content-center font-bold" severity="secondary" label="eliminar" link />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formgrid grid mx-0 p-2 md:p-3 shadow-2 border-round-xl md:p-3">
                                            <div className="col-12 pb-4">
                                                <h3 className="mt-2 mb-0 md:mt-0">Ingresa los datos de facturación</h3>
                                            </div>
                                            <div className="field col-12 md:col-4">
                                                <InputText placeholder="RUC" className="w-full" />
                                            </div>
                                            <div className="field col-12 md:col-8">
                                                <InputText placeholder="Razón social" className="w-full" />
                                            </div>
                                            <div className="field col-12 md:col-12">
                                                <InputText placeholder="Giro/industria" className="w-full" />
                                            </div>
                                            <div className="field col-12 md:col-12">
                                                <InputText placeholder="Dirección" className="w-full" />
                                            </div>
                                            <div className="field col-12 md:col-4">
                                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                                    placeholder="Departamento" className="w-full" />
                                            </div>
                                            <div className="field col-12 md:col-4">
                                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                                    placeholder="Provincia" className="w-full" />
                                            </div>
                                            <div className="field col-12 md:col-4">
                                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                                    placeholder="Distrito" className="w-full" />
                                            </div>
                                            <div className="field col-12 md:col-8">
                                                <InputText placeholder="Contacto" className="w-full" />
                                            </div>
                                            <div className="field col-12 md:col-4">
                                                <InputText placeholder="Teléfono de contacto" className="w-full" />
                                            </div>
                                            <div className="field col-12 md:col-12">
                                                <InputText placeholder="Correo electrónico" className="w-full" />
                                            </div>
                                            <div className="field col-12 md:col-12">
                                                <InputTextarea value={value} rows={5} cols={30} className="w-full" />
                                            </div>
                                            <div className="field col-12 flex md:col-6 md:col-offset-6">
                                                <Button className="font-semibold flex-1 mr-2" severity="secondary" label="Cancelar" outlined />
                                                <Button className="font-semibold flex-1" severity="secondary" label="Guardar" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 pb-3">
                                        <span className="font-medium">¿Tienes un cupón de descuento?</span>
                                    </div>
                                    <div className="field col-12 pb-3 md:col-7">
                                        <div className="flex">
                                            <span className="p-input-icon-left flex-1">
                                                <i className="pi pi-ticket" />
                                                <InputText placeholder="Ingresa el código" className="w-full" />
                                            </span>
                                            <Button className="flex font-semibold ml-2" label="Aplicar" outlined />
                                        </div>
                                    </div>
                                    <div className="col-12 pb-3">
                                        <span className="font-medium">Selecciona el medio de pago que deseas</span>
                                    </div>
                                    <div className="field col-12 pb-3 mb-0 flex md:col-7">
                                        <div className="opt-rb opt-selected-rb flex-1 justify-content-end flex-wrap p-2 pt-3 border-round-sm text-center line-height-4 border-1 border-400 cursor-pointer">
                                            <img className="w-5 border-round-md md:w-3" src="logo-izipay.png" />
                                            <span className="font-medium inline-block w-full line-height-2">Tarjeta de crédito</span>
                                        </div>
                                        <div className="opt-rb flex-1 justify-content-end flex-wrap p-2 pt-3 border-round-sm text-center line-height-4 border-1 border-400 cursor-pointer ml-2 md:ml-3">
                                            <img className="w-5 border-round-md md:w-3" src="logo-pagoefectivo.png" />
                                            <span className="font-medium inline-block w-full line-height-2">Banca móvil</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="grid mx-0 md:p-3 md:ml-4 md:shadow-2 border-round-xl">
                                <div className="col-12"><h3 className="my-2 md:mt-0">Resumen de la orden</h3></div>
                                <div className="col-7 text-lg font-medium">Total a pagar</div>
                                <div className="col-5 text-lg font-bold text-right">S/ 0.00</div>
                                <div className="col-12">
                                    <div className="formgrid grid mx-0">
                                        <div className="field col-12 px-0 flex align-items-start flex-wrap">
                                            <div className="flex align-items-center justify-content-center mr-2">
                                                <Checkbox checked={checked}></Checkbox>
                                            </div>
                                            <span className="flex-1 align-items-center justify-content-center">He leído y acepto los <a href="#">términos y condiciones</a>
                                                de santacatalina.org.pe y autorizo la <a href="#">política de privacidad.</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <Button className="font-semibold w-full" size="large" icon="" label="Continuar con la compra" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="CHECKOUT-3-RB" className="">
                <div className="container-rb pt-7 pb-4 surface-100">
                    <Steps model={items} className="pt-7" />
                </div>
                <div className="container-rb pt-5">
                    <div className="grid m-0">
                        <div className="col-12 md:col-8 border-bottom-1 border-300 mb-3 pb-4 pt-0 md: mb-0 md:pb-0 md:pr-0 md:border-right-1 md:border-bottom-none">
                            <div className="grid mx-0 md:px-4">
                                <div className="col-12 pb-3 md:pb-2">
                                    <h2 className="mt-0">Orden #2874947</h2>
                                    <div className="text-lg">Recibirás en tu bandeja de correo <span className="font-medium">visitante@gmail.com</span> un código QR con los detalles de tu compra, podrás ingresar mostrándolo en portería. ¡Gracias y que disfrutes de tu visita!</div>
                                </div>
                                <div className="col-12">
                                    <div className="surface-100 border-round-xl w-full py-3 p-2 mt-3 md:p-3">
                                        <div className="col-12 pt-1 pb-2">
                                            <span className="font-medium opacity-60">Datos del cliente</span>
                                        </div>
                                        <div className="col-12">
                                            <h3 className="mt-0 mb-2">Nombre Nombre Apellido Apellido</h3>
                                            <div className="py-1"><i className="pi pi-user mr-2"></i>DNI 73326395</div>
                                            <div className="py-1"><i className="pi pi-envelope mr-2"></i>visitante@gmail.com</div>
                                            <div className="pt-1"><i className="pi pi-phone mr-2"></i>961845682</div>
                                        </div>
                                    </div>
                                    <div className="surface-100 border-round-xl w-full py-3 p-2 mt-3 md:p-3">
                                        <div className="col-12 pt-1 pb-2">
                                            <span className="font-medium opacity-60">Productos (2)</span>
                                        </div>
                                        <div className="col-12">
                                            <div className="grid mx-0">
                                                <div className="col-12 p-0">
                                                    <div className="grid mt-0 mx-0 mb-2 py-2 border-bottom-1 border-400">
                                                        <div className="col-4 pl-0 md:col-3 md:pb-0">
                                                            <img className="w-full border-round-lg" src="cover-visit-1.png" />
                                                        </div>
                                                        <div className="col-8 md:col-6 pb-0">
                                                            <ul className="list-none m-0 p-0 pr-0">
                                                                <li className="pb-2">
                                                                    <h3 className="mt-0 mb-0">Visita estándard</h3>
                                                                </li>
                                                                <li className="pb-2"><span className="font-medium mr-1">Día:</span>15 de Julio 2023</li>
                                                                <li className="pb-2"><span className="font-medium mr-1">Hora:</span>10:30 am</li>
                                                                <li className="pb-2"><span className="font-medium mr-1">Cant. de visitantes:</span>8
                                                                    <Button className="p-button p-component font-bold p-button-link ml-2" label="ver" link onClick={() => setVisibleRight(true)} /></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-12 md:col-3 text-right pr-0">
                                                            <span className="font-medium pt-1">S/ 180.00</span>
                                                        </div>
                                                    </div>
                                                    <div className="grid mt-0 mx-0 mb-2 py-2 border-bottom-1 border-400">
                                                        <div className="col-4 pl-0 md:col-3 md:pb-0">
                                                            <img className="w-full border-round-lg" src="cover-visit-1.png" />
                                                        </div>
                                                        <div className="col-8 md:col-6 pb-0 pr-0">
                                                            <ul className="list-none m-0 p-0">
                                                                <li className="pb-2">
                                                                    <h3 className="mt-0 mb-0">Video</h3>
                                                                </li>
                                                                <li className="pb-2">Descripción o mensaje sobre la compra del video.</li>
                                                                <li className="pb-2"><span className="font-medium mr-1">Duración:</span>2 horas</li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-12 md:col-3 text-right pr-0">
                                                            <span className="font-medium pt-1">S/ 20.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 pb-0 md:col-5 md:col-offset-7 px-0">
                                                    <div className="flex justify-content-between flex-wrap">
                                                        <div className="flex align-items-center justify-content-center">Sub total</div>
                                                        <div className="flex align-items-center justify-content-center text-right">S/ 100.00</div>
                                                    </div>
                                                    <div className="flex justify-content-between flex-wrap pt-2">
                                                        <div className="flex align-items-center justify-content-center">Descuento</div>
                                                        <div className="flex align-items-center justify-content-center text-right">S/ 0.00</div>
                                                    </div>
                                                    <div className="flex justify-content-between flex-wrap pt-2">
                                                        <div className="flex align-items-center justify-content-center">
                                                            <h3 className="mt-0 mb-0">Total</h3>
                                                        </div>
                                                        <div className="flex align-items-center justify-content-center text-right">
                                                            <h3 className="mt-0 mb-0">S/ 100.00</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="surface-100 border-round-xl w-full py-3 p-2 mt-3 md:p-3">
                                        <div className="col-12 pt-1 pb-2">
                                            <span className="font-medium opacity-60">Datos de pago</span>
                                        </div>
                                        <div className="col-12">
                                            <div className="grid mx-0">
                                                <div className="col-3 md:col-1 pl-0">
                                                    <img className="w-full border-round-md" src="logo-visa.png" />
                                                </div>
                                                <div className="col-9 md:col-11 pb-0">
                                                    <h3 className="mt-0 mb-2">**** **** **** 6987</h3>
                                                    <div className="py-1">Sin cuotas</div>
                                                    <div className="pt-1"><span className="font-medium mr-1">ID operación:</span>#02474984467</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="surface-100 border-round-xl w-full py-3 p-2 mt-3 md:p-3">
                                        <div className="col-12 pt-1 pb-2">
                                            <span className="font-medium opacity-60">Datos de facturación</span>
                                        </div>
                                        <div className="col-12">
                                            <h3 className="mt-0 mb-2">Razón Social SAC</h3>
                                            <div className="py-1">RUC 20548707520</div>
                                            <div className="py-1">Av. Dirección Empresarial 6798</div>
                                            <div className="pt-1">Distrito, Provincia - Departamento</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="grid mx-0 md:ml-4">
                                <div className="col-12 md:pl-0">
                                    <h4 className="my-2 opacity-40">Recuerda</h4>
                                    <p className="mt-0 mb-2 w-full inline-block text-sm">¡Sin colas! Dirígete directamente a la sala o a la zona de despacho online en la Dulcería para recoger tu combo. No necesitas pasar por boletería.</p>
                                    <p className="mt-0 mb-2 w-full inline-block text-sm">Muestra tu orden de compra directamente desde tu celular, no es necesario imprimir.</p>
                                    <p className="mt-0 mb-2 w-full inline-block text-sm">El horario de la función indica el inicio de proyección de publicidad y avances de los próximos estrenos. Luego de éstos, iniciará la película.</p>
                                    <h4 className="my-2 opacity-40">Condiciones de compra</h4>
                                    <p className="mt-0 mb-2 w-full inline-block text-sm">¡Sin colas! Dirígete directamente a la sala o a la zona de despacho online en la Dulcería para recoger tu combo. No necesitas pasar por boletería.</p>
                                    <p className="mt-0 mb-2 w-full inline-block text-sm">Muestra tu orden de compra directamente desde tu celular, no es necesario imprimir.</p>
                                    <p className="mt-0 mb-2 w-full inline-block text-sm">El horario de la función indica el inicio de proyección de publicidad y avances de los próximos estrenos. Luego de éstos, iniciará la película.</p>
                                    <h4 className="my-2 opacity-40">Estimado cliente</h4>
                                    <p className="mt-0 mb-2 w-full inline-block text-sm">Para un mejor servicio realiza los siguientes pasos:</p>
                                    <p className="mt-0 mb-2 w-full inline-block text-sm">Muestra tu orden de compra directamente desde tu celular, no es necesario imprimir.</p>
                                    <p className="mt-0 mb-2 w-full inline-block text-sm">El horario de la función indica el inicio de proyección de publicidad y avances de los próximos estrenos. Luego de éstos, iniciará la película.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className="w-full md:w-3">
                <div id="RETURNS" className="hidden">
                    <h3>Política de devoluciones</h3>
                    <p className="text-justify">Se efectuará devolución del pago, solamente en caso de que el visitante no haya podido usar su entrada y esté imposibilitado de regresar al monasterio dentro de un periodo de 11 meses contados a partir de la fecha de compra. La devolución se efectuará dentro de los plazos y parámetros que establecen las plataformas de pago.</p>
                </div>
                <div id="TERMS" className="hidden">
                    <h3>Términos y condiciones</h3>
                    <ul className="pl-0 text-justify">
                        <li className="list-none"><h4>Compra online</h4></li>
                        <li className="ml-3"><p className="text-justify">Las compras realizadas por este medio no permiten anulación o devolución. Por favor verifica tu compra antes de pagar. ¡Gracias!</p></li>
                        <li className="ml-3"><p className="text-justify">El uso de las entradas adquiridas por este medio, solo es válido para el día que indica la orden de compra.</p></li>
                        <li className="ml-3"><p className="text-justify">No está permitido el uso de flash para fotografías de lienzos y pintura mural y en los ambientes donde se indique asimismo, no está permitido el uso de drones.</p></li>
                        <li className="ml-3"><p className="text-justify">Está prohibido el ingreso y consumo de bebidas alcohólicas y/o de personas en estado etílico. Está prohibido fumar dentro del monasterio.</p></li>
                        <li className="ml-3"><p className="text-justify">Antes de ingresar debes mostrar al Portero tu entrada o código QR impreso o desde tu Smartphone para que realice la verificación en el sistema.</p></li>
                        <li className="ml-3"><p className="text-justify">La compra por este medio emite automáticamente boleta de venta. Puedes solicitar factura al momento de realizar tu compra, te llegará en 24 horas.</p></li>
                        <li className="ml-3"><p className="text-justify">El ingreso de mascotas está restringido a aquellas que sean soporte emocional de su dueño. Respete la ley N°29517.</p></li>
                        <li className="ml-3"><p className="text-justify">Los adultos mayores, personas con discapacidad, madres gestantes o con niños pequeños tienen atención preferencial de acuerdo a la Ley Nº 27408.</p></li>
                        <li className="ml-3"><p className="text-justify">Toma en cuenta el horario escogido para tu visita y respetar la misma para evitar aglomeraciones.</p></li>
                        <li className="ml-3"><p className="text-justify">Niños a partir de 7 años pagan entrada.</p></li>
                        <li className="ml-3"><p className="text-justify">Agradeceremos cuides tus pertenencias. El Monasterio de Santa Catalina no se responsabiliza por pérdidas o robos.</p></li>
                        <li className="ml-3"><p className="text-justify">El servicio de guiado es opcional, no está incluido en el precio del boleto, en caso de requerir este servicio lo podrás contratar al momento de tu ingreso y pagarlo directamente a la guía (personal independiente).</p></li>
                        <li className="ml-3"><p className="text-justify">No se permitirá el ingreso de personas que no presenten la entrada virtual con su respectivo código.</p></li>
                        <li className="ml-3"><p className="text-justify">Se debe respetar el ingreso al Monasterio de Santa catalina de acuerdo al orden de llegada.</p></li>
                    </ul>
                    <ul className="pl-0 text-justify">
                        <li className="list-none"><h4>Pagos online</h4></li>
                        <li className="ml-3"><p className="text-justify">Para el pago con Tarjeta de Crédito y Débito Visa, MasterCard o American Express utilizamos la plataforma de pagos Izy Pay y Pago efectivo. Estas plataformas realizarán el cobro en nuevos soles. Si la cuenta asociada a tu tarjeta es en dólares, el tipo de cambio utilizado será el de tu banco.</p></li>
                    </ul>
                </div>
                <div id="VISITORS" className="hidden">
                    <h3>Detalle de visitantes</h3>
                    <div className="grid">
                        <div className="col-12 pt-4 pb-3 flex">
                            <img className="mr-2" src="icon-peru.svg" /><span className="font-medium opacity-70">Visitantes peruanos</span>
                        </div>
                        <div className="col-8">
                            <span className="w-full inline-block font-semibold">Adultos</span>
                            <span className="w-full inline-block text-sm opacity-80">S/ 10.00</span>
                        </div>
                        <div className="col-4">
                            <InputText placeholder="0" className="w-full flex-1 text-center" />
                        </div>
                        <div className="col-8">
                            <span className="w-full inline-block font-semibold text-overflow-ellipsis overflow-hidden white-space-nowrap">Adultos mayores</span>
                            <span className="w-full inline-block text-sm opacity-80">S/ 10.00</span>
                        </div>
                        <div className="col-4">
                            <InputText placeholder="0" className="w-full flex-1 text-center" />
                        </div>
                        <div className="col-8">
                            <span className="w-full inline-block font-semibold">Universitarios</span>
                            <span className="w-full inline-block text-sm opacity-80">S/ 10.00</span>
                        </div>
                        <div className="col-4">
                            <InputText placeholder="0" className="w-full flex-1 text-center" />
                        </div>
                        <div className="col-8">
                            <span className="w-full inline-block font-semibold">Escolares</span>
                            <span className="w-full inline-block text-sm opacity-80">S/ 10.00</span>
                        </div>
                        <div className="col-4">
                            <InputText placeholder="0" className="w-full flex-1 text-center" />
                        </div>
                        <div className="col-12">
                            <div className="surface-100 border-round-lg p-3">
                                <span className="mb-2 w-full inline-block text-sm">Departamento origen</span>
                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                    placeholder="Selecciona un departamento" className="w-full" />
                            </div>
                        </div>
                        <div className="col-12 pt-2 pt-4 pb-3 flex">
                            <img className="mr-2" src="icon-extranjero.svg" /><span className="font-medium opacity-70">Visitantes extranjeros</span>
                        </div>
                        <div className="col-8">
                            <span className="w-full inline-block font-semibold">Universitarios</span>
                            <span className="w-full inline-block text-sm opacity-80">S/ 10.00</span>
                        </div>
                        <div className="col-4">
                            <InputText placeholder="0" className="w-full flex-1 text-center" />
                        </div>
                        <div className="col-8">
                            <span className="w-full inline-block font-semibold">Escolares</span>
                            <span className="w-full inline-block text-sm opacity-80">S/ 10.00</span>
                        </div>
                        <div className="col-4">
                            <InputText placeholder="0" className="w-full flex-1 text-center" />
                        </div>
                        <div className="col-12">
                            <div className="surface-100 border-round-lg p-3">
                                <span className="mb-2 w-full inline-block text-sm">País origen</span>
                                <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Selecciona un país"
                                    filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="SING-IN" className="hidden">
                    <h3>Que bueno tenerte por aquí!</h3>
                    <div className="formgrid grid">
                        <div className="field col-12">
                            <span className="font-medium opacity-70">Inicia sesión para continuar con tu compra.</span>
                        </div>
                        <div className="field col-12">
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-user" />
                                <InputText placeholder="Correo electrónico" className="w-full" />
                            </span>
                        </div>
                        <div className="field col-12">
                            <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask className="w-full" />
                        </div>
                        <div className="field col-12">
                            <Button className="font-semibold w-full" label="Ingresar" />
                        </div>
                        <div className="field col-12 flex justify-content-between flex-wrap mt-2">
                            <Button className="flex align-items-center justify-content-center font-bold" severity="secondary" label="Olvide mi contraseña" link />
                            <Button className="flex align-items-center justify-content-center font-bold" label="Crear cuenta" link />
                        </div>
                        <div className="field col-12 border-top-1 border-300 pt-4 mt-2">
                            <Button className="font-semibold w-full" severity="secondary" label="Continuar como invitado" outlined />
                        </div>
                    </div>
                </div>
                <div id="SING-UP" className="hidden">
                    <h3>Crear cuenta</h3>
                    <div className="formgrid grid">
                        <div className="field col-12">
                            <span className="font-medium opacity-70">Completa la siguiente información</span>
                        </div>
                        <div className="field col-12">
                            <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="País"
                                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full" />
                        </div>
                        <div className="field col-12">
                            <InputText placeholder="Nombres" className="w-full" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <InputText placeholder="Ap. Paterno" className="w-full" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <InputText placeholder="Ap. Materno" className="w-full" />
                        </div>
                        <div className="field col-12">
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="Tipo de documento" className="w-full" />
                        </div>
                        <div className="field col-12">
                            <InputText placeholder="Nro. de documento" className="w-full" />
                        </div>
                        <div className="field col-12">
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-phone" />
                                <InputText placeholder="Teléfono" className="w-full" />
                            </span>
                        </div>
                        <div className="field col-12">
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-envelope" />
                                <InputText placeholder="Correo electrónico" className="w-full" />
                            </span>
                        </div>
                        <div className="field col-12">
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-lock" />
                                <InputText placeholder="Contraseña" className="w-full" />
                            </span>
                        </div>
                        <div className="field col-12">
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-lock" />
                                <InputText placeholder="Confirmar contraseña" className="w-full" />
                            </span>
                            HUARCAYA PASSWORD
                        </div>
                        <div className="field col-12">
                            <Button className="font-semibold w-full" label="Registrarme" />
                        </div>
                        <div className="field col-12 border-top-1 border-300 pt-4 mt-2">
                            <Button className="font-semibold w-full" severity="secondary" label="Iniciar sesión" outlined />
                        </div>
                    </div>
                </div>
                <div id="FORGET-PASSWORD" className="hidden">
                    <h3>¿Olvidaste tu contraseña?</h3>
                    <div className="formgrid grid">
                        <div className="field col-12">
                            <span className="font-medium opacity-70">Por favor, ingresa tu correo electrónico para enviarte un enlace para que puedas crear una nueva contraseña.</span>
                        </div>
                        <div className="field col-12">
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-envelope" />
                                <InputText placeholder="Correo electrónico" className="w-full" />
                            </span>
                        </div>
                        <div className="field col-12">
                            <Button className="font-semibold w-full" label="Enviar" />
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    );
}

export default ContentHTML;
