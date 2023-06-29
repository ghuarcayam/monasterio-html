import React from 'react';
import logo from './logo.svg';
import './App.css';
import './theme-prime.css'
import "primereact/resources/primereact.min.css"; 
import 'primeicons/primeicons.css';
import ContentHTML from './ContentHTML'

function App() {
  const aa = 1;



  
  return (
    <div className="App">
      <div>Header</div>
      <ContentHTML />
      <div>Footer</div>
    </div>
  );
}

export default App;
