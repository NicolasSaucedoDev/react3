
/* 
  Esta app va a tener una lista de entrenamientos en formato de cartas
  Con cada click el usuario va a ir tachando cada ejercicio realizado
  el cual se opacara en un color gris para marcar finalizado
  tambien podria quedar con algun efecto visual mientras se este haciendo
*/

import Card from "./components/Card/Card"
import Data from "./data/data.json"



function App() {
  return (
    <>
      <h1>Ejercitate con esta App</h1>
      <h2>Haz click en la card cuando finalices el ejercicio</h2>
      <section className="nc_container">
        {
          Data.map((item) => {
            return (
              <Card key={item.titulo} titulo={item.titulo} descr={item.descr} hecho={item.hecho}></Card>
            )
          })
        }
      </section>
    </>
  )
}

export default App


