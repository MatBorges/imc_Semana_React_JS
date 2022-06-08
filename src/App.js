import './App.css' //importa o CSS
import { useState } from "react"; // importa o useState
 

export default function App(){

  
  const[] = useState() //Cria o useState

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span></span>
      <div className="ipts">
        <input type='text' placeholder="Peso Kg Ex: 85.2"/>
        <input type='text' placeholder="Altura cm Ex: 180"/>
        <button>
          Calcular
        </button>
      </div>
      <h2>Seu IMC foi tanto!!!!!!</h2>
    </div>
  )
}