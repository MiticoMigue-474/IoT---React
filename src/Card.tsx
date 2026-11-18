interface Props {
    titulo: string;
    descripcion : string;
    linkBoton : string;
    linkImg: string;
}

const Card = ({titulo, descripcion, linkBoton, linkImg}: Props) => {
    return(
        <div className="card">
            <img src={linkImg} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <a href={linkBoton} className="btn btn-primary">Capturar</a>
            </div>
        </div>
    )
}

export default Card