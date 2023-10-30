/*
 * Creación de una contraseña segura.
 * 
 * Un usuario requiere crear una contraseña segura utilizando una cantidad y caracteres específicos. Para ello utiliza un software para que verfifíque si la combinación de caracteres ya ha sido registrada. 
 * El tamaño de la contraseña debe ser de al menos 3 dígitos y máximos 5
 * Deber incluir al menos 1 caracter especial
 * 
    int numeroMaximo = 49;
    int[] digitos = { 1, 4, 5, 7, 8, 9 };
    List<int> numerosGenerados = new List<int>();
 
    int decenaMaxima = numeroMaximo / 10;
    int unidadMaxima = numeroMaximo % 10;

    for(int i = 0; i < digitos.Length && digitos[i] <= decenaMaxima; ++i)
        for(int j = 0; j < digitos.Length && (digitos[i] < decenaMaxima || digitos[j] <= unidadMaxima); ++j)
        numerosGenerados.Add(digitos[i] * 10 + digitos[j]); 
 */


/*let highNum = 49;
const digits: number[] = [1, 4, 5, 7, 8, 9];
let generatedNumbers: number[] = []; //array que guarda los números generados

let maximumTen = highNum / 10;
let maximumUnit = highNum % 10;
function charactersCombination (values = digits){
    for(let i = 0; values.length && values[i] <= maximumTen; i++){
        for(let j = 0; values.length && (values[i] < maximumTen || values[i] <= maximumUnit); j++){
            generatedNumbers.push(values[i] * + values[j]);
        }
    }
    return generatedNumbers;
}
console.log(charactersCombination(digits));*/

let highNum = 49;
const digits: number[] = [1, 4, 5, 7, 8, 9];
let generatedNumbers: number[] = []; // array que guarda los números generados

function charactersCombination(values = digits) {
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            const combinedNumber = values[i] * 10 + values[j];
            if (combinedNumber <= highNum) {
                generatedNumbers.push(combinedNumber);
            }
        }
    }
    return generatedNumbers;
}

console.log(charactersCombination(digits));