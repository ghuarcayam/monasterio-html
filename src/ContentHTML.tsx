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
            <div id="SPLASH-RB" className="">
                <div className="splash-rb fixed w-full h-full top-0 left-0 text-center z-3">
                    <img className="logo-splash" src="logo-monasterio-white.svg" />
                </div>
            </div>
            <div id="HOME-RB" className="hidden">
                <div className="container-rb pt-4">
                    <div className="grid m-0 pt-7">
                        <div className="col-12 text-center">
                            <img className="logo w-10 md:hidden" src="logo-monasterio.svg" />
                            <img className="logo-2 hidden w-8 md:inline-block" src="logo-2.svg" />
                            <h1 className="text-xl md:text-4xl">Una ciudad dentro de la ciudad</h1>
                            <p className="md:text-lg">Si quieres vivir la experiencia escoje el circuito de tu interés y visítanos</p>
                        </div>
                    </div>
                    <div className="grid m-0 pb-6">
                        <div className="col-12 md:col-4">
                            <div className="itemVisit shadow-2 cursor-pointer">
                                <div className="topItemVisit flex align-items-center">
                                    <img className="" src="cover-visit-1.png" />
                                </div>
                                <div className="bottomItemVisit flex align-items-center p-3">
                                    <h3 className="flex-1 my-0">Visita estándard</h3>
                                    <Button className="flex" icon="pi pi-arrow-right" rounded text aria-label="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="itemVisit shadow-2 cursor-pointer">
                                <div className="topItemVisit flex align-items-center">
                                    <img className="" src="cover-visit-2.png" />
                                </div>
                                <div className="bottomItemVisit flex align-items-center p-3">
                                    <h3 className="flex-1 my-0">Visita teatralizada nocturna</h3>
                                    <Button className="flex" icon="pi pi-arrow-right" rounded text aria-label="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-4">
                            <div className="itemVisit shadow-2 cursor-pointer">
                                <div className="topItemVisit flex align-items-center">
                                    <img className="" src="cover-visit-3.png" />
                                </div>
                                <div className="bottomItemVisit flex align-items-center p-3">
                                    <h3 className="flex-1 my-0">Visita de la peruanidad</h3>
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
                        <div className="col-10 col-offset-1 text-center md:col-5 md:text-left md:col-offset-0">
                            <h3 className="text-white mt-1 md:mt-3 md:mb-2 md:text-3xl">Compra un paseo virtual</h3>
                            <p className="text-white font-bold mb-1">Tour virtual - S/ 20.00</p>
                            <p className="text-white mt-1">El paseo virtual contiene 7 capítulos sobre la fascinante historia del Monasterio.</p>
                            <Button className="font-semibold" icon="pi pi-cart-plus" label="Agregar al carrito" text raised />
                        </div>
                    </div>
                </div>
                <div className="container-rb">
                    <div className="grid m-0">
                        <div className="col-12 md:col-10 md:col-offset-1">
                            <h3 className="text-center md:text-3xl">Preguntas frecuentes</h3>
                            <Accordion activeIndex={0}>
                                <AccordionTab header="Descripción de la pregunta">
                                    <p className="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </AccordionTab>
                                <AccordionTab header="Descripción de la pregunta">
                                    <p className="m-0">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                                    </p>
                                </AccordionTab>
                                <AccordionTab header="Descripción de la pregunta">
                                    <p className="m-0">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
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
                                        <p className="m-0 text-justify">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </TabPanel>
                                    <TabPanel header="Información general">
                                        <p className="m-0 text-justify">
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
                                        <span className="w-full inline-block text-sm opacity-80">S/ 10.00</span>
                                    </div>
                                    <div className="field col-7 md:col-6 flex">
                                        <Button className="flex mr-2" icon="pi pi-minus" rounded text aria-label="" />
                                        <InputText placeholder="0" className="w-full flex-1 text-center" />
                                        <Button className="flex ml-2" icon="pi pi-plus" rounded text aria-label="" />
                                    </div>
                                    <div className="field col-5 md:col-6">
                                        <span className="w-full inline-block font-semibold text-overflow-ellipsis overflow-hidden white-space-nowrap">Adultos mayores</span>
                                        <span className="w-full inline-block text-sm opacity-80">S/ 10.00</span>
                                    </div>
                                    <div className="field col-7 md:col-6 flex">
                                        <Button className="flex mr-2" icon="pi pi-minus" rounded text aria-label="" />
                                        <InputText placeholder="0" className="w-full flex-1 text-center" />
                                        <Button className="flex ml-2" icon="pi pi-plus" rounded text aria-label="" />
                                    </div>
                                    <div className="field col-5 md:col-6">
                                        <span className="w-full inline-block font-semibold">Universitarios</span>
                                        <span className="w-full inline-block text-sm opacity-80">S/ 10.00</span>
                                    </div>
                                    <div className="field col-7 md:col-6 flex">
                                        <Button className="flex mr-2" icon="pi pi-minus" rounded text aria-label="" />
                                        <InputText placeholder="0" className="w-full flex-1 text-center" />
                                        <Button className="flex ml-2" icon="pi pi-plus" rounded text aria-label="" />
                                    </div>
                                    <div className="field col-5 md:col-6">
                                        <span className="w-full inline-block font-semibold">Escolares</span>
                                        <span className="w-full inline-block text-sm opacity-80">S/ 10.00</span>
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
                                        <span className="w-full inline-block font-semibold">Universitarios</span>
                                        <span className="w-full inline-block text-sm opacity-80">S/ 10.00</span>
                                    </div>
                                    <div className="field col-7 md:col-6 flex">
                                        <Button className="flex mr-2" icon="pi pi-minus" rounded text aria-label="" />
                                        <InputText placeholder="0" className="w-full flex-1 text-center" />
                                        <Button className="flex ml-2" icon="pi pi-plus" rounded text aria-label="" />
                                    </div>
                                    <div className="field col-5 md:col-6">
                                        <span className="w-full inline-block font-semibold">Escolares</span>
                                        <span className="w-full inline-block text-sm opacity-80">S/ 10.00</span>
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
            <div id="CHECKOUT-3-RB" className="hidden">
                <div className="container-rb pt-7 pb-4 surface-100">
                    <Steps model={items} className="pt-7" />
                </div>
                <div className="container-rb pt-5">
                    <div className="grid m-0">
                        <div className="col-12 md:col-8 border-bottom-1 border-300 mb-3 pb-4 pt-0 md: mb-0 md:pb-0 md:pr-0 md:border-right-1 md:border-bottom-none">
                            <div className="grid mx-0 md:px-4">
                                <div className="col-12 pb-3 md:pb-2">
                                    <h2 className="mt-0">Orden #2874947</h2>
                                    <div className="text-lg">Gracias por tu compra, hemos enviado toda la información sobre la compra al correo <span className="font-medium">visitante@gmail.com</span></div>
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
                <div id="VISITORS" className="">
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
