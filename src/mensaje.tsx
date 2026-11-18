///Imports
//import {state} from React;

///Función de Componentee
function Mensaje(){
    ///Lineas de estado
    const name = "Pepe";

    ///Bloque de renderizado
    if(name)
        return <h1>Hola {name}</h1>
    return(
        <h1>Hola Mundo!</h1>
    );
}

///Exportación del bloque
export default Mensaje;