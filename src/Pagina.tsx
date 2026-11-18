import Lista_grupo from "./Lista_grupo";
import Alerta from "./Alerta";
import Boton from "./Boton";
import {useState} from "react";
import Card from "./Card";

function Pagina(){
    let Cities = [
        "New York",
        "Mexico City",
        "Apatzinango",
        "Tokyo",
        "Mérida"
    ];

    let Dishes = [
        "Burger",
        "Tacos",
        "Steak",
        "Fried Chicken",
        "Chilli"
    ];

    let Restaurantes = [
        "Chilli's",
        "KFC",
        "La fonda inn",
        "Sensei",
        "La Papablita"
    ];

    const handleSelectedItem = (item: string) => {
        console.log("Imprimiendo desde el padre" + item);
    }

    const [alertaVisible, setAlertaVisible] = useState(false);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Lista_grupo items = {Cities} listaDeQue="Lugares" alSeleccionar={handleSelectedItem}/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Lista_grupo items = {Dishes} listaDeQue="Platillos" alSeleccionar={handleSelectedItem}/>
                    </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Lista_grupo items = {Restaurantes} listaDeQue="Restaurantes" alSeleccionar={handleSelectedItem}/>
                </div>
            </div>
            <div className="row">
                <Boton funcionDelPadre={()=>setAlertaVisible(true)} color="info">Bang!</Boton>
                {alertaVisible && <Alerta funcionDelPadre={()=>setAlertaVisible(false)}>
                    Mamas solteras cerca de su ubicación, presione <a href='#'>aquí</a> para conocerlas
                </Alerta>}
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card
                    titulo="Carta ejemplo" 
                    descripcion="Es un ejemplo"
                    linkBoton="#"
                    linkImg="..."/>
                </div>
            </div>
        </div>
    );
}
export default Pagina;
 {

 }