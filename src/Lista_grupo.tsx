import { useState } from "react";

interface Props {
    items: string[];
    listaDeQue: string;
    alSeleccionar : (item:string) => void;
}

function Lista_grupo({items,listaDeQue,alSeleccionar}: Props){

    const [itemSelected, setItemSelected] = useState(-1);
    
    const check = () =>{
        return items.length === 0 ? <p>No hay elementos</p> : null;
    }
    return (
    <div className="container">
        {check()}
        <h1>Lista de {listaDeQue}</h1>
        <ul className="list-group">
            {items.map((Item, indice)=>(
                <li
                onClick={()=>{
                    setItemSelected(indice);
                    alSeleccionar(Item);
                }}
                className={
                    itemSelected === indice
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={Item}>{Item}
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Lista_grupo;