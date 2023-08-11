// ejemplos de javaescript

//comentario de lina

/**
 * comentario de bloque
 */
console.log("hola mundo")
console.log("--------------");


const edad = 55;
let nombre = "juan"
let apellido = "juan"

const esestudiante = false
const altura = 1.83
const semestres = [] //list
const materiapreferida = {nombre:"calcuo", id:0} //diccionario - objecto - JSON
const universidad = null
const carrera =undefined;

console.log("tipo de dato de nombre" + typeof nombre);
console.log("tipo de dato de edad" + typeof edad);

console.log("---conversion de strings a number---");
const precioMatricula ="50000000000.5"
console.log("entero" = parseInt(precioMatricula));
console.log("flotante" = parseFloat(precioMatricula));

console.log("--- == y === ----");
console.log("doble igual: " + "45" == 45); //si compara el valor
console.log("doble triple: " + "45" === 45); //no compara el valor y tipo  

console.log("--- concatenacion ---");
console.log(nombre + " " + apellido);
console.log(`${nombre} ${apellido}`);

console.log("--- operador ternario (EXP ? VERDADERO : FALSO)---");
console.log( edad >=18 ?"es mayor de edad": "es menor de edad");
let condition = edad > 18
if(condition){}
if(condition){}else {}

console.log("--- condiciones ---")
const dia = "LUNES"
switch (dia) {
    case "LUNES":
        console.log("LUNES");
        
        break;
    case "MARTES":
    console.log("MARTES");
        
        break;

    default:
        console.log("NO ES VALIDO")
        break;
} 

console.log("--- ciclos ---");
for (letindex = 0; index < 10; index ++){

}

// while (condition){}

for (const item of [1,2,3]){
    console.log(item);
}
for (const key in materiapreferida){
    console.log(key);
}
console.log("--- foreach ---");
[1,2,3].forEach(element =>{
    console.log(element);
});

console.log("--- funciones ---");
function imprimirnombre(nombre){
    console.log(nombre);
}
//llamar a la funcion imprimirnombre
imprimirnombre(nombre)

const imprimirnombreApellido = (nombre, apellido) => {
    console.log(`${nombre} ${apellido}`);
}
//llamar imprimirnombeApellido
imprimirnombreApellido(nombre, apellido)


const crearnombrecompleto = (nombre, apellido) => {
    console.log("global scope fake")
    console.log(nombre, apellido);
    let name = nombre
    if (nombre.length > 3) {
        let name = nombre[0] + apellido
        console.log("94 "+ name);

    }
    console.log("92" + name);
}
const botonehtm = document.getElementsByTagName("button")
crearnombrecompleto(nombre, apellido)