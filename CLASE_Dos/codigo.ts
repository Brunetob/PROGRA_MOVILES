/*let x: number;
let y = 1;

let z;
 z = 1
 z = "one"
enum ContractStatus {
    Permanent,
    Temp,
    Apprentice
}

let emplyeeStatus: ContractStatus = ContractStatus.Permanent;
console.log(emplyeeStatus);

let randomValue: unknown = 10 // aquí puede ir any;
randomValue = true;
randomValue = 'Mateo';

console.log(randomValue.name);
randomValue();
randomValue.toUpperCase();

//aserción de tipos
let randomValue: unknown = 10;
randomValue = true;
//randomValue = 'Mateo';

if (typeof randomValue === "string"){
    console.log((randomValue as string).toUpperCase());
}else{
    console.log("Error - A string was expected here.");
}*/

//*****EJERCICIOs EN CLASES******
//Declarar e inicializar variables con cada uno de los tipos vistos y por medio de la aserción de tipos y condicionales determinar su tipo

let value: unknown;

value = 10;
if (typeof value === 'number') {
    console.log("Value es de tipo ", typeof value);
}

value = 'hola';
if (typeof value === 'string') {
    console.log("Value es de tipo ", typeof value);
}

value = true;
if (typeof value === 'boolean') {
    console.log("Value es de tipo ", typeof value);
}

value = undefined;
if (typeof value === 'undefined') {
    console.log("Value es de tipo ", typeof value);
}

value = function () {};
if (typeof value === 'function') {
    console.log("Value es de tipo ", typeof value);
}

value = [];
if (Array.isArray(value)) {
    console.log("Value es de tipo ", typeof value);
}

//Ejercicio 2 - Mediante una función recibir dos parámetros, si es que los parámetros son numéricos que sume, si es que son strings, que los concatene

function parameterCheck(value: unknown, value2: any){
    if(typeof value === 'number' && typeof value2 === 'number'){
        return value + value2;
    }else if(typeof value === 'string' && typeof value2 === 'string'){
        return value + " " + value2;
    }else{
        return "Los tipos de datos no son aceptados";
    }
}
console.log(parameterCheck("Hola","extraño"));

//Tipos de unión
/*let multiType: number | boolean;
multiType = 20;
multiType = true;
// multiType = "veinte";*/
