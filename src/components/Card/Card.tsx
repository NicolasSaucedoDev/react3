
import { useState } from 'react';
import './Card.css'

export default function Card({titulo="", descr="", hecho=false}) {
  const [done, setDone] = useState(hecho);

  const classHecho = done ? 'nc_card nc_card--hecha' : 'nc_card';

    return(
        <article 
        className={classHecho}
        onCopy={(e)=>{console.log('no se puede copiar '+e.target.innerText)}} 
        onClick={()=>{setDone(!done);}}>
          <h3 className="nc_card--title">{titulo}</h3>
          <p className="nc_card--desc">{descr}</p>
        </article>
    )
}