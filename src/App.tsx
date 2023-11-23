
/* 
  Esta app va a tener una lista de entrenamientos en formato de cartas
  Con cada click el usuario va a ir tachando cada ejercicio realizado
  el cual se opacara en un color gris para marcar finalizado
  tambien podria quedar con algun efecto visual mientras se este haciendo
*/

import { useEffect, useState } from "react"
import Card from "./components/Card/Card"

const Ejercicios = [
  {
    "titulo": "Abdominales",
    "descr": "3 series de 10",
    "hecho": true
  },
  {
      "titulo": "Estocada",
      "descr": "3 series de 12",
      "hecho": false
  },
  {
      "titulo": "Sentadillas",
      "descr": "3 series de 6",
      "hecho": true
  },
  {
      "titulo": "Sentadillass",
      "descr": "3 series de 6",
      "hecho": true
  }
]


function App() {
  const [ej, setEj] = useState(Ejercicios);

  function borrarCard(el) {
    setEj(prevEj => {
      // Crea una nueva referencia de 'prevEj' en lugar de modificar la existente
      const nuevoEj = [...prevEj]
      const result = nuevoEj.filter((e) => e.titulo !== el)
      return result
    });
  }


  return (
    <>
      <h1>Ejercitate con esta App</h1>
      <h2>Haz click en la card cuando finalices el ejercicio</h2>
      <section className="nc_container">
        {
          ej.map((ejercicio) => {
            return (
              <Card key={ejercicio.titulo} titulo={ejercicio.titulo} descr={ejercicio.descr} hecho={ejercicio.hecho} borrarCard={ borrarCard }></Card>
            )
          })
        }
      </section>
    </>
  )
}


export default App


