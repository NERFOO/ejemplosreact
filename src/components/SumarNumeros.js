import foto from './../assets/images/img1.jpg';

function SumarNumeros(props) {
    var imageSize = {
        width: "150px", height: "150px"
    }

    const sumar = (num1, num2) => {
        //var resultado = num1 + num2;
        var num1 = parseInt(props.numero1);
        var num2 = parseInt(props.numero2);
        var suma = num1 + num2;
        console.log(suma);
    }

    return (<div>
        <img src={foto} style={imageSize}></img>
        <button onClick={ () => sumar(5,5) }>Sumar</button>
    </div>)
}

export default SumarNumeros;
