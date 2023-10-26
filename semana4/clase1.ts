//Crear una función anónima que reciba como parámetro un array numérico y me devuelva la suma de todos sus elementos
let funcSumar = function (valor1:number, valor2:number): number {//es recomendable siemre especificarel tipo de dato a returnar
    return valor1 + valor2;
}
console.log(funcSumar(4, 9));

//************************Ejemplo función flecha************************
//Crear una función flecha que reciba como parámetro un array numérico y me devuelva la suma de todos sus elementos. Si el cuerpo de la función tiene más de una línea, enciéerelo entre llaves e incluya la declaración return (si procede)
let sumar = (array: number[]) => {

}

//Convertir esta función a anónima y a flecha:
/*function displayAlert(message){
    alert("The message is " + message);
}*/

let messageAlertAnonnymous = function (message){//función anónima
    alert("The message is " + message);
}
let messageAlertArrow = (message) => {//Función flecha
    alert("The message is " + message);
}

//************************Parámetros Obligatorios************************
function addNumbers(x: number, y?: number): number | undefined {
    if (y !== undefined) {
      return x + y;
    } else {
      return x;
    }
  }
  
console.log(addNumbers(1, 2)); // Devuelve 3
console.log(addNumbers(1));    // Devuelve 1

//************************Parámetros Predeterminados************************
function addNumberss (x: number, y = 25){
    return x + y;
};
addNumberss(1,2);
addNumberss(1);//si no envío ningún valor va a salir error ya que x es obligatorio por lo tanto uno debe ser obligatorio

//************************Parámetros REST************************
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => { // ... significa operador spread
    let total: number = firstNumber;
    for(let counter = 0; counter < restOfNumbers.length; counter++){
        if(isNaN(restOfNumbers[counter])){
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
//************************Parámetros de Objeto deconstruido************************
//el propósito de deconstruir la interface es para que la sintaxis sea más lógico
interface Message {
    text: string;
    sender: string;
}

//************************ TAREA Hacer que los 3 valores de la función sean opcionales sin valores predeterminados************************
let addThreeNumbers = (x?:number, y?:number, z?:number) : number | unknown => {
    if (x !== undefined && y !== undefined && z !== undefined) {
        return x + y + z;
    } else {
        return undefined;
    }      
};