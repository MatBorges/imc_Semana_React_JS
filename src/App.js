import './App.css' //importa o CSS
import { useState } from "react"; // importa o useState 

export default function App(){
  
  const[peso, setPeso] = useState('') //Cria o useState
  const[altura, setAltura] = useState('')
  const[msg, setMsg] = useState('')

  function calculaIMC(){
    // alert(`O peso é ${peso} e a altura é ${altura}`)
    const p = peso
    const a = altura / 100
    const i = p / (a * a)
    // Seu imc é de ${imc.toFixed(2)}
    setMsg(`Seu IMC é de ${i.toFixed(2)}`)

  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span></span>
      <div className="ipts">
        <input type='text' placeholder="Peso Kg Ex: 85.2" value={peso} onChange={(e)=> setPeso(e.target.value)}/>
        <input type='text' placeholder="Altura cm Ex: 180" value={altura} onChange={(e)=> setAltura(e.target.value)}/>
        <button onClick={calculaIMC}>
          Calcular
        </button>
      </div>
      <h2>{msg}</h2>
    </div>
  )
}