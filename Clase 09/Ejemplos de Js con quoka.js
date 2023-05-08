//Variables
var nombre1; //Varible indefinida
// Todas los comandos necesitan terminar con ";"

var nombre = "jose"; //Variable definida
console.log(nombre);

nombre = "Lucia";
console.log(nombre)

var num = 1;
console.log(num);
num = 2;
console.log(num);

//Variables casi no se usan, porque puede traer problemas el hecho de que se pueda modificar.

var suma = 5 + 6;
console.log(suma);

var num1 = 6;
var num2 = 15;

suma = num1 + num2;
console.log(suma);
console.log(num1 + num2);

console.log(5 + 6 * 3)
console.log((5 + 6) * 3);

var bool = false;
console.log(bool);

//Constantes = El valor de la constante no se puede modificar a lo largo del programa (inmutable)
const nom = "Matias";
console.log(nom);

const numero1 = 100;
const numero2 = "100";
const numero3 = true;
console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof numero3);

//Definir como objeto
const n1 = new Number(5);
console.log(n1);

const n2 = 2**2;
console.log(n2);

const n3 = 10 % 3;
console.log(n3);

// Operar Asignación
const a = 5;
const b = "5";

//Comparación de contenido con ==
if(a == b){
    console.log("A y B Son iguales");
}else{
    console.log("A y B son distintas");
}

//Comparación de el contenido y el tipo de dato con ===
if(a === b){
    console.log("A y B son iguales");
}else{
    console.log("A y B son distintas");
}

//Operadores de cadenas y numeros
const var1 = "Tomas";
const var2 = "Florentin";
const var3 = var1 + " " + var2;
console.log(var3);