import React from 'react';
import logo from './logo.svg';
import './App.css';
import './theme-prime.css'
import "primereact/resources/primereact.min.css"; 
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.min.css';
import { Button } from 'primereact/button';
import ContentHTML from './ContentHTML'

function App() {
  
  return (
    <div>
      <header className="grid m-0 shadow-1 fixed w-full z-1 bg-white">
        <div className="col-2 text-left">
          <Button className="" icon="pi pi-home" rounded text aria-label="" /> 
        </div>
        <div className="col-10 text-right flex justify-content-end flex-wrap">
          <div className="flex align-items-center justify-content-center px-2 ml-2">PEN S/</div>
          <div className="flex align-items-center justify-content-center px-2 ml-2">Flag</div>
          <Button className="flex align-items-center justify-content-center ml-2" icon="pi pi-shopping-cart" rounded text aria-label="" /> 
          <Button className="flex align-items-center justify-content-center ml-2" icon="pi pi-user" rounded text aria-label="" /> 
        </div>
      </header>
      <ContentHTML />
      <footer className="grid mt-6 m-0 text-white text-center pt-5 pb-7 px-5">
        <div className="col-12 col-md-4">
          <h3>Sobre el sitio</h3>
          <a href="#" className="text-white no-underline inline-block w-full py-2">Política de devoluciones</a>
          <a href="#" className="text-white no-underline inline-block w-full py-2">Términos y condiciones</a>
        </div>
        <div className="col-12 col-md-4">
          <h3>Contáctanos</h3>
          <a href="#" className="text-white no-underline inline-block w-full py-2"><i className="pi pi-phone mr-2"></i>51 - 54 221213</a>
          <a href="#" className="text-white no-underline inline-block w-full py-2"><i className="pi pi-phone mr-2"></i>51 - 54 221234</a>
          <a href="#" className="text-white no-underline inline-block w-full py-2"><i className="pi pi-phone mr-2"></i>51 - 54 221235</a>
          <a href="#" className="text-white no-underline inline-block w-full py-2"><i className="pi pi-envelope mr-2"></i>informes@santacatalina.org.pe</a>
          <a href="#" className="text-white no-underline inline-block w-full py-2"><i className="pi pi-map-marker mr-2"></i>Santa Catalina 301 – Arequipa – Perú</a>
        </div>
        <div className="col-12 col-md-4">
          <h3>Síguenos en</h3>
          <div className="flex justify-content-center flex-wrap">
            <a href="#" className="social text-white"><i className="pi pi-facebook mx-1"></i></a>         
            <a href="#" className="social text-white"><i className="pi pi-instagram mx-1"></i></a>
            <a href="#" className="social text-white"><i className="pi pi-youtube mx-1"></i></a>
          </div>
        </div>
        <div className="col-12 opacity-60 mt-5 col-md-3">
          <img className="w-full" src="logo-2-white.svg" />
        </div>
        <div className="col-12 opacity-60 col-md-9 md:text-right">
          <span>© 2023</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
