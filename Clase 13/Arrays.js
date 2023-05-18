// const array = new Array ("a", "b", "c");

const array = ["a", "b", "c"];

// Posición
console.log(array[0]);
console.log(array[2]);

// .length
console.log(array.length);

// Acceder al último elemento
console.log(array[array.length-1])


// Crear
const vector = [1,3,5,8];
const vectorVacio = [];
const vectorDos = new Array("a", "b", "c");
const vectorTres = new Array(1,5,10,15,20);

console.log(vector);
// document.write(vector);
console.log("Vector vacio: ", vectorVacio);
console.log(vectorDos[1]);


// Recorrer un vector
console.log("Elementos del vector 2:");
for(i = 0; i < vectorDos.length; i++){
    console.log(vectorDos[i]);
}

// Push y Pop
var frutas =["Bananas", "Naranja"];


console.log(frutas);
frutas.push("Kiwi", "Pera");
console.log(frutas);

// Pop
console.log (frutas)
frutas.pop();
console.log(frutas);

//Unshift
var colores = ["Rojo", "Celeste"];
console.log(colores);
colores.unshift("Azul", "Naranja");
console.log(colores);

//Shift()
console.log(colores);
colores.shift();
console.log(colores);

// IndexOf y LastIndexOf

var letras = ["A", "B", "C", "D", "E", "B", "C"];

var posB1 = letras.indexOf("B");
console.log("La primera 'B' tiene indice", posB1);
var posB2 = letras.indexOf("B", 2);
console.log("La segunda 'B' tiene indice", posB2);

var posA = letras.lastIndexOf("A");
console.log("La última 'A' tiene indice", posA);
var posB = letras.lastIndexOf("B");
console.log("La última 'B' tiene indice", posB);


//Sort Ordenamiento
const arreglo = ['c', 'd','a','b', 'e'];
arreglo.sort();
console.log(arreglo);

const a = ['3', '10', '1', '31', '5'];

a.sort();

console.log(a);
// Con numeros no funciona muy bien

// for in
var arreglo1 = ["P", "r", "u", "e", "b", "a"];
for (var letra1 in arreglo){
    console.log(letra1);
}
// Devuelve la posición de cada letra

for(var letra2 in arreglo){
    console.log(arreglo1[letra2])
}
// Devuelve cada elemento del array.

//for in Objetos
var persona = {
    nombre: "Ana",
    apellido: "Paz",
    edad: 25
};
//Muestra los atributos
for (var x in persona){
    console.log(x)
}
//Muestra los nombres de las propiedades y el valor asociado
for(var x in persona){
    console.log(x + ": " + persona[x]);
}


if (typeof(Storage) !== "undefined"){
    localStorage.setItem("apellido", "Perez"); // No existe, lo agrega.
    localStorage.setItem("apellido", "Pérez"); // Existe, lo reemplaza
    localStorage.setItem("nombre", "Juan");
    document.getElementById("resultado").innerHTML = localStorage.getItem("apellido");
}else{
    document.getElementById("resultado").innerHTML = "Su navegador no soporta Web Storage.";
}