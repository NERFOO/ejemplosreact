import './App.css';
import SumarNumeros from '../SumarNumeros';
import SaludoHijo from '../SaludoHijo';
import Matematicas from '../Matematicas';
import Contador from '../Contador';
import Car from '../Car';

function App() {
  //QUEREMOS UN METODO EN EL PARENT QUE SEA LLAMADO DESDE EL HIJO
  const metodoPadre = (descripcion) => {
    console.log("Soy " + descripcion);
  }

  const triplePadre = (valor) => {
    var resultado = parseInt(valor);
    console.log("Triple es " + valor*3);
  }

  return (
    <div className="App">
      <h1>Componente App</h1>
      <Car Marca="Audi" Modelo="A5" Aceleracion="10" VelocidadMaxima="100"/>

      {/*ENVIAMOS EL METODO DEL PADRE AL HIJO CON UN NOMBRE DE PROPS */}
      {/* <SaludoHijo idhijo="1" metodoPadre={metodoPadre}/>
      <SaludoHijo idhijo="2" metodoPadre={metodoPadre}/>
      <SaludoHijo idhijo="3" metodoPadre={metodoPadre}/> */}

      {/* <Matematicas num="5" triplePadre={triplePadre}/>
      <Contador inicio="4"/>
      <Contador inicio="14"/>
      <Contador inicio="8"/>
      <Contador inicio="1"/> */}
    </div>
  )
}

export default App;
