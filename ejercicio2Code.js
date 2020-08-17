
//TIPO DE DATOS 
//variables tipo 
var n = 1; 
typeof(n); 

n1 = Number(22);
typeof(n1); 

n2 = Number(52.36);
typeof(n2);



 // variables tipo string cadena de caracteres contenido letras o numeros 
var  x = "1";
typeof(x); 


// variables tipo boolean 
x = false;
y = true;  


var resultadoPositivo = Boolean(); // cuando no le das el valor true sera false aunque no se utilice 
resultadoPositivo = true;


// null
z = null;



// symbol valores que nunca cambian 
var sym1 = Symbol();
typeof sym1;


// symbol tipo de dato Objet : para crear objetos
// un objeto contiene sus propias caracteristicas para formar un objeto 
 var screen = Object();
 screen
 {}
 typeof screen;




// datos compuestos arrays  sierve para guardar muchos valores dentro de una variable 
// 

var numerosArray = [1,2,3,4,5,6,7,8,9];//esta formada la variable numerosArray con los valores 1,2,3,4,5,6,7,8,9


numerosArray; // valor del array
numerosArray.length;// obtiene el tamaño de un array cuantos valores tiene 


// MATRUSHKA arrays de arrays 
var paresArray = [2,4,6,8,10];
var imparesArray = [1,3,5,7,9,11];
var matrizNumerosArray = Array(numerosArray, paresArray, imparesArray);
matrizNumerosArray;
matrizNumerosArray[3] // te dara como resultado el valor que esta dentro del indice : 4




// tipos de datos compuestos .JSON:notacion de objeto en javascript
//estructura compleja guarda 
//https://jsoneditoronline.org/#left=local.lutufo&right=local.qihike
var persona = {
	"Nombre": "Tania",
	"Edad":"28",
    "EsMujer": true
} 

persona;
persona.EsMujer;// accede al valor de la variable esMujer


// .JSON añadiendo un elemento array

var persona = {
	"Nombre": "Tania",
	"Edad":"28",
    "EsMujer": true,
	"Aficiones": ["nadar", "comer", "bailar"]
	persona.aficiones[0]; // accede al indice 0 con el valor nadar 
	
} 

persona;
persona.Aficiones; //Acceder al valor de la variable aficiones 



// otro elemento tipo .JSON  agragando tipo JSON

var persona = {
	"Nombre": "Tania",
	"Edad":"28",
    "EsMujer": true,
	"Aficiones": ["nadar", "comer", "bailar"],
	"Din": { "numero": 44556677,                         // campo se llama dni y el valor de el campo se llama numero y fecha de expedicion
	"fechaExpedicion": "20 de Mayo 2013"}
	
} 


persona.Din.fechaExpedicion;//accede al valor 

---------------------------------- reto 1 ----------------




var cadena = "Esto es una cadena de texto";
 cadena;
 
var numero = 5;
numero;

var valorBooleano = true;
valorBooleano;

console.log(cadena, numero, valorBooleano);


-----------------------------------Reto 2 ----------------

var parrafo1 = "Lo hemos estando viendo constantemente en los ejemplos de cada uno de los tipos hasta ahora, pero para dar mas claridad a la sintaxisy al uso, una variable es un contenedor que almacena un valor. " ;
 
var parrafo2 = " Es una manera de poner nombre o codificar datos y/o valores que no son utiles interesantes o necesarios para lo que estamos haciendo. ";                                                                     
 
var parrafo3 = "La sintaxis de definicion es sencilla." ;  


document.write(parrafo1 + "<br>" + parrafo2 + "<br>" + parrafo3);                                                                                                       


                                                                  
----------------------------------Reto 3 --------------------------------


var arrayFrutas = ["manzana","pera","platano","cereza","sandia"];

var arrayPlantas = ["flor", "rosas", "girasoles", "palmera", "tulipan"];

var arrayPersonas = ["Ana", "Susan", "Raquel","Lala", "Tere"];

var matrizArrays = Array (arrayFrutas, arrayPlantas, arrayPersonas);

matrizArrays;


document.write(matrizArrays[2]);
document.write(matrizArrays [2][4]);


-------



var arrayFrutas = ["manzana","pera","platano","cereza","sandia"];

var arrayPlantas = ["flor", "rosas", "girasoles", "palmera", "tulipan"];

var arrayPersonas = ["Ana", "Susan", "Raquel","Lala", "Tere"];

var matrizArrays = Array (arrayFrutas, arrayPlantas, arrayPersonas);

matrizArrays[2] = [1,2,3,4,5];

document.write(matrizArrays [2])


 -----------


var arrayFrutas = ["manzana","pera","platano","cereza","sandia"];

var arrayPlantas = ["flor", "rosas", "girasoles", , "tulipan"];

var arrayPersonas = ["Ana", "Susan", "Raquel","Lala", "Tere"];

var matrizArrays = Array (arrayFrutas, arrayPlantas, arrayPersonas);

matrizArrays[1][3]= Boolean();

document.write(matrizArrays [1][3]);


																		   
																								   
--------------



arrayBooleano.push('agrega al final del arreglo');

arrayBooleano.shift(); // elimina el principio del arreglo

arrayBooleano.pop(); //elimina el ultimo valor  

arrayFrutas.sort(); //sort te acomoda la lista por orden alfabetico
console.log(arrayFrutas);



-----------------------------------------------------Reto 4 -------------------------



var persona = {
"Nombre": "Tania",
"edad": 29,
"esVaron": false,
"Aficiones"	: ["nadar","correr", "cantar"],
"nie" : {"numero": 58497455,
"fechaExpedicion": "01/02/20}

persona.Nombre;
persona.Aficiones;
persona.Aficiones[1];
persona.nie;
persona.nie.fechaExpedicion;

---------------------------------------------------- Reto 5 ----------------------------



var mesa = {
	"color": "roja",
	"tamaño":"pequeña",
"costo": " economico"}

mesa;

var silla = {
	"color": "blanca",
	"tamaño":"pequeña",
"costo": " medio"}

silla;
 
var comedor = {
	"color": "rosa",
	"tamaño":"grande",
"costo": " alto"}

comedor;

var muebles = Array(mesa, silla, comedor);

console.log ( muebles[0])




------------

var cadena = " string";

cadena = 125; 







var cadena =  ["string" , "ana", "laura"]; //array

cadena [1] = 23; 


cadena =  [125]; 





















