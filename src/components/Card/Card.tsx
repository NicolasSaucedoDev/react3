
import { useState } from 'react';
import './Card.css'

function Card({titulo="", descr="", hecho=false, borrarCard}) {
  // const [done, setDone] = useState(hecho);

  // const classHecho = done ? 'nc_card nc_card--hecha' : 'nc_card';

    return(
        // <article 
        // className={classHecho}
        // onCopy={(e)=>{console.log('no se puede copia '+e.target.innerText)}} 
        // onClick={()=>{setDone(!done);}}>
        <article>
          <h3 className="nc_card--title">{titulo}</h3>
          <p className="nc_card--desc">{descr}</p>
          <button onClick={()=>borrarCard(titulo)}>Borrar</button>
        </article>
    )
}


export default Card