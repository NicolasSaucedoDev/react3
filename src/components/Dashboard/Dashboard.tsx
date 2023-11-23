import { useState } from "react";
import Card from "../Card/Card"

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

const [ej, setEj] = useState(Ejercicios);

function borrarCard() {
  let aux = ej;
  aux.pop();
  setEj(aux);
}

function Dashboard() {
            return (
                // ej.map((ejercicio) => {
                <Card key={ejercicio.titulo} titulo={ejercicio.titulo} descr={ejercicio.descr} hecho={ejercicio.hecho} borrarCard={ borrarCard }></Card>
                // })
            )
}

export default Dashboard