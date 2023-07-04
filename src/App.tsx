import React from 'react';
import logo from './logo.svg';
import './App.css';
import './theme-prime.css'
import "primereact/resources/primereact.min.css"; 
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.min.css'
import ContentHTML from './ContentHTML'

function App() {
  
  return (
    <div className="App">
      <div>Header</div>
      <ContentHTML />
      <div>Footer</div>
    </div>
  );
}

export default App;
