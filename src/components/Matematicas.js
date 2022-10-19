import {useState} from 'react';

function Matematicas(props) {
    const {num , triplePadre } = props;

    const [ numero, setNumero ] = useState(parseInt(num));
    const doble = () => {
        setNumero(numero * 2);
    }


    // const doble = () => {
    //     var operacion = num * 2;
    //     console.log("El doble es " + operacion);
    // }

    return (<div>
        <h1>Matematicas {num}</h1>
        <button onClick={ () => doble() }>Doble Hijo</button>
        <button onClick={ () => triplePadre(num)}>Sumar Padre</button>
    </div>)
}

export default Matematicas;