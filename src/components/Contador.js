
//PARA PODER UTILIZAR STATE NECESITAMOS IMPORTAR USESTATE DE LA LIBRERIA REACT
import {useState} from 'react';

function Contador(props) {
    const { inicio } = props;
    //NECESITAMOS UNA VARIABLE STATE DONDE VAMOS A INDICAR SU CREACION Y SU TIPO DE DATO TAMBIEN
    //SETNOMBREDEVARIABLE ES UN METODO
    const [ numero, setNumero ] = useState(parseInt(inicio));

    //VAMOS A TENER EN CUENTA UN METODO PARA IR INCREMENTANDO UNA VARIABLE STATE DE CONTADOR
    const sumarContador = () => {
        //UTILIZAMOS EL METODO SET PARA MODIFICAR EL VALOR
        setNumero(numero + 1);
    }

    return ( <div>
        <h1>Ejemplo State de React</h1>
        <h2 style={{color: "blue"}}>Contador {numero}</h2>
        <button onClick={ () => sumarContador() }>Sumar contador</button>
        <button onClick={ () => {
            setNumero(numero -1);
        } }>Restar contador</button>
    </div>)
}


export default Contador;