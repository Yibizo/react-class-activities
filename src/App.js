import * as React from "react";
import { useState } from "react";
import { suma, resta, ComponenteSimple } from "./funciones/funcionesSimples";
import "./App.css"

export default function App() {
  const [conteo, funcionConteo] = useState(0);
  const [cadenas, funcionCadena] = useState("cadena");
  const [arreglos, funcionArreglo] = useState([
    { nombre: "Diego" },
    { nombre: "Mejia" },
  ]);
  const [objeto, funcionObjeto] = useState({ nombre: "Diego" });

  return (
    <div id="mainApp">
      
      {suma()}
      
      <ComponenteSimple />

      <p>{conteo}</p>

      <button onClick={() => funcionConteo(conteo + 1)}>Sumatoria</button>
      <br></br>
      <button onClick={() => funcionConteo(0)}>Reiniciar</button>
    </div>
  );
}
