interface Props {
    children: string;
    funcionDelPadre: () => void;
    color?: "primary" | "secondary" | "danger" | "info";
}

const Boton = ({children, funcionDelPadre, color="primary"}:Props) =>{
    return(
        <button
            type="button"
            className={"btn btn-"+color}
            onClick={funcionDelPadre}>{children}
        </button>
    )
}
export default Boton;