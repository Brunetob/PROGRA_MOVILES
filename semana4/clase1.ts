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
let addThreeNumbers = (x?:number|undefined, y?:number|undefined, z?:number|undefined) : number| undefined => { //no sirve con undefine
    if (x !== undefined && y !== undefined && z !== undefined) {
        return x + y + z;
    } else {
        return undefined;
    }      
};

/*
export const colorCode = (color: string): number => {
  const colorMap: Record<string, number> = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
  };

  if (colorMap.hasOwnProperty(color)) {
    return colorMap[color];
  } else {
    throw new Error('Color desconocido');
  }
};

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
 **************************************************
 export function decodedValue(colors: string[]): number {
  // Mapeo de colores a números
  const colorMap: Record<string, number> = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
  };

  // Tomam solo los dos primeros colores
  const firstColor = colors[0];
  const secondColor = colors[1];

  // Convertimos los dos colores en un número de dos dígitos
  const value = colorMap[firstColor] * 10 + colorMap[secondColor];

  return value;
}
****************************************************
export function decodedResistorValue(colors: string[]): string {
  if (colors.length < 3) {
    throw new Error('Debe proporcionar al menos tres colores');
  }

  const colorMap: Record<string, number> = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
  };

  let mainValue = colorMap[colors[0]] * 10 + colorMap[colors[1]];
  const zeros = colorMap[colors[2]];

  let label = ' ohms';

  if (zeros > 0) {
    // Añadir ceros al valor principal
    mainValue *= Math.pow(10, zeros);

    if (mainValue >= 1000) {
      // Manejar prefijos métricos
      const prefixes = ['ohms', 'kiloohms', 'megaohms', 'gigaohms', 'teraohms', 'petaohms'];
      let exponent = 0;

      while (mainValue >= 1000) {
        mainValue /= 1000;
        exponent++;
      }

      label = ` ${prefixes[exponent]}`;
    }
  }
  return mainValue + label;
}
**********************************************************************
export function isLeap(year: number): boolean {
  // Un año es bisiesto si es divisible por 4
  if (year % 4 === 0) {
    // Pero no debe ser divisible por 100, a menos que también sea divisible por 400
    if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
      return true;
    }
  }
  return false;
}

*/