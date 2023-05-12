// function saludar(){
//     console.log("Hola, soy una función");
// }

// saludar();

for(i = 1; i <= 10; i++){
    console.log("5 x", i, "=", 5*i);
}

function multiplicarHastaElDiez(numero){
    for(i = 1; i <= 10; i++){
        console.log(numero, "x", i, "=", numero*i);
    }
}

multiplicarHastaElDiez(2);

function saludar(nombre){
    console.log("Hola ", nombre);
}

saludar("Tomas")

function sumar(a, b){
    console.log(a + b);
}

var suma = sumar(7, 4);

function tablaMultiplicar(tabla, hasta){
    for(var i = 1; i < hasta; i++){
        console.log(tabla, "x ", i, "=", tabla*i);
    }
}
tablaMultiplicar(5,8);

// Devolución de valores:

function hacerSuma(a, b){
    return a + b;
}

var resultado = hacerSuma(5,8);

console.log(resultado);


//Funciones flecha
var aCuadrado = x => x*x;

console.log(aCuadrado(3));

// Más de un parametro
var aSumar = (num1, num2) => num1+num2;
console.log(aSumar(5,7));

var aMultiplicar = (num1, num2) =>
{
    producto = num1*num2;
    return producto;
}

console.log(aMultiplicar(6,7))