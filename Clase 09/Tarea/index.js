const operacion = prompt("Ingrese la operacion a realizar (+,-,*,/)");
const valor1 = parseInt(prompt("Ingrese el primer valor: "));
const valor2 = parseInt(prompt("Ingrese el segundo valor: "));
var resultado;

// if(operacion === "+"){
//     resultado = valor1 + valor2;
// }else if(operacion === "-"){
//     resultado = valor1 - valor2;
// }else if(operacion === "*"){
//     resultado = valor1 * valor2;
// }else{
//     resultado = valor1/valor2;
// }

switch (operacion) {
    case "+":
        resultado = valor1 + valor2;
        break;
    case "-":
        resultado = valor1 - valor2;
        break;
    case "*":
        resultado = valor1 * valor2;
        break;
    case "/":
        resultado = valor1 / valor2;
        break;
}

document.write("El resultado de la operación es: " + resultado);