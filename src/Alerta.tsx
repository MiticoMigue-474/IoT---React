import type {ReactNode} from "react";

interface Props {
    children: ReactNode;
    funcionDelPadre: () => void;
}

const Alerta = ({children, funcionDelPadre}: Props)=>{
    return(
        <div className ="alert alert-primary alert-dismissable fade show" role="alert">
            {children}
            <button
            type="button"
            className="btn-close"
            onClick={funcionDelPadre}
            data-bs-dismiss="alert"
            aria-label="Close">
        </button>
        </div>
    )
}

export default Alerta;