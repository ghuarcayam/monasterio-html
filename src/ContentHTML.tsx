import React from 'react';
import './App.css';
import { Steps } from 'primereact/steps';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';

function ContentHTML() {

    const items = [
        {
            label: 'Personal'
        },
        {
            label: 'Seat'
        },
        {
            label: 'Payment'
        },
        {
            label: 'Confirmation'
        }
    ];

    return (
        <>
            <div id="splash-rb" className="hidden">
                <img className="logo-splash" src="logo-monasterio-white.svg" />
            </div>
            <div id="home-rb" className="">
                <div className="container-rb pt-4">
                    <div className="grid m-0 pt-7">
                        <div className="col-12 text-center">
                            <img className="logo w-10 md:hidden" src="logo-monasterio.svg" />
                            <img className="logo-2 hidden w-8 md:inline-block" src="logo-2.svg" />
                            <h1 className="text-xl md:text-5xl">Una ciudad dentro de la ciudad</h1>
                            <p>Si quieres vivir la experiencia escoje el circuito de tu interés y viístanos</p>
                        </div>
                    </div>
                    <div className="grid m-0 pb-6">
                        <div className="col col-md-4">
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
                        <div className="col col-md-4">
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
                        <div className="col col-md-4">
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
                        <div className="col-12 col-md-4 col-md-offset-1 text-center">
                            <img className="w-10 w-md-full pr-md-4" src="laptop-video.png"/>
                        </div>
                        <div className="col-10 col-offset-1 text-center col-md-5">
                            <h3 className="text-white mt-1">Compra un paseo virtual</h3>
                            <p className="text-white font-bold">Tour virtual - S/ 20.00</p>
                            <p className="text-white">El paseo virtual contiene 7 capítulos sobre la fascinante historia del Monasterio.</p>
                            <Button className="md:large" icon="pi pi-cart-plus" label="Agregar al carrito" text raised />
                        </div>
                    </div>
                </div>
                <div className="container-rb">
                    <div className="grid m-0">
                        <div className="col-12">
                            <h3 className="text-center">Preguntas frecuentes</h3>
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
            <div id="detailProduct" className="hidden">
            </div>
        </>
    );
}

export default ContentHTML;
