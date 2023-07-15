import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import './theme-prime.css'
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.min.css';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import ContentHTML from './ContentHTML';
import { Dropdown } from 'primereact/dropdown';
import { Badge } from 'primereact/badge';

function App() {

  const items = [
    {
      label: 'Carro'
    },
    {
      label: 'Pago'
    },
    {
      label: 'Resumen'
    }
  ];



  const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];



  const [selectedCountry, setSelectedCountry] = useState([null]);
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

  const panelFooterTemplate = () => {
    return (
      <div className="py-2 px-3">
        {selectedCountry ? (
          <span>
            <b>Hola</b> selected.
          </span>
        ) : (
          'No country selected.'
        )}
      </div>
    );
  };

  return (
    <div className="">
      <header className="shadow-1 fixed w-full z-2 bg-white hidden">
        <div className="grid m-0">
          <div className="col-2 text-left">
            <Button className="" severity="secondary" icon="pi pi-home" rounded text aria-label="" />
          </div>
          <div className="col-10 text-right flex justify-content-end flex-wrap">
            <div className="flex align-items-center justify-content-center">
              <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                placeholder="PEN S/" className="" />
            </div>
            <div className="flex align-items-center justify-content-center ml-1">
              <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="ESP"
                valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="" panelFooterTemplate={panelFooterTemplate} />
            </div>
            <div className="flex align-items-center justify-content-center ml-2 p-overlay-badge">
              <Button className="" severity="secondary" icon="pi pi-shopping-cart" rounded text aria-label=""/>
              <Badge value="2"></Badge>  
            </div>
            <Button className="flex align-items-center justify-content-center ml-2" severity="secondary" icon="pi pi-user" rounded text aria-label=""/>
          </div>
        </div>
        <div className="grid m-0 titlePage-rb">
          <div className="col-12 flex">
            <Button className="flex align-items-center mr-1" icon="pi pi-arrow-left" rounded text aria-label="" />
            <div className="flex align-items-center"><h1 className="m-0 p-0 text-xl font-semibold">Título de la página</h1></div>
          </div>
          <div className="col-12 hidden"><Steps model={items} /></div>
        </div>
      </header>
      <ContentHTML />
      <footer className="container-rb mt-6 text-white text-center pt-5 pb-7 md:text-left hidden">
        <div className="grid m-0">
          <div className="col-12 md:col-4">
            <h3>Sobre el sitio</h3>
            <ul className="m-0 p-0 list-none">
              <li className="inline-block w-full">
                <a href="#" className="text-white no-underline inline-block w-full py-2">Política de devoluciones</a>
              </li>
              <li className="inline-block w-full">
                <a href="#" className="text-white no-underline inline-block w-full py-2">Términos y condiciones</a>
              </li>
            </ul>
          </div>
          <div className="col-12 md:col-4">
            <h3>Contáctanos</h3>
            <ul className="m-0 p-0 list-none">
              <li className="inline-block w-full">
                <a href="#" className="text-white no-underline inline-block py-2"><i className="pi pi-phone mr-2"></i>51 - 54 221213</a>
              </li>
              <li className="inline-block w-full">
                <a href="#" className="text-white no-underline inline-block py-2"><i className="pi pi-phone mr-2"></i>51 - 54 221234</a>
              </li>
              <li className="inline-block w-full">
                <a href="#" className="text-white no-underline inline-block py-2"><i className="pi pi-phone mr-2"></i>51 - 54 221235</a>
              </li>
              <li className="inline-block w-full">
                <a href="#" className="text-white no-underline inline-block py-2"><i className="pi pi-envelope mr-2"></i>informes@santacatalina.org.pe</a>
              </li>
              <li className="inline-block w-full">
                <a href="#" className="text-white no-underline inline-block py-2"><i className="pi pi-map-marker mr-2"></i>Santa Catalina 301 Arequipa, Perú</a>
              </li>
            </ul>
          </div>
          <div className="col-12 md:col-4">
            <h3>Síguenos en</h3>
            <div className="flex justify-content-center flex-wrap text-center md:justify-content-start">
              <a href="#" className="social text-white"><i className="pi pi-facebook mx-1"></i></a>
              <a href="#" className="social text-white"><i className="pi pi-instagram mx-1"></i></a>
              <a href="#" className="social text-white"><i className="pi pi-youtube mx-1"></i></a>
            </div>
          </div>
          <div className="col-12 opacity-60 md:col-3 md:text-right hidden">
            <img className=" mt-3 w-11 md:w-full" src="logo-2-white.svg" />
            <span className="mt-4">© 2023</span>
          </div>
        </div>
        <div className="grid m-0 mt-5 opacity-60">
          <div className="col-12 md:col-3">
            <img className="w-11 md:w-full" src="logo-2-white.svg" />
          </div>
          <div className="col-12 md:col-9 md:text-right">
            <span>© 2023</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
