


function SaludoHijo(props) {
    //INVENTAMOS UN NOMBRE DE VARIABLE PARA EL METODO DEL PARENT Y PARA LA RECEPCION DEL IDHIJOª
    const { idhijo , metodoPadre } = props;


    return (<div>
        <h1>Eventos Hijo -- Padre</h1>
        <button onClick={() => metodoPadre("Soy el hijo " + idhijo) }>Llamar metodo Padre</button>
    </div>)
}

export default SaludoHijo;