function generarNumerosLoteria() {
    const cantidadNumeros = 8; // Definición del número de elementos en cada tabla de lotería
    const rangoNumeros = 10; // El rango máximo para generar números aleatorios
    const tablasLoteria = []; // Inicialización de un arreglo para almacenar las tablas de lotería

    for (let i = 0; i < 10; i++) { // Bucle para generar 20 tablas de lotería
        const numerosTabla = []; // Inicialización de un arreglo para almacenar los números de cada tabla
        while (numerosTabla.length < cantidadNumeros) { // Bucle para generar 8 números en cada tabla
            const numeroAleatorio = Math.floor(Math.random() * rangoNumeros) + 1; // Generación de un número aleatorio

            if (!numerosTabla.includes(numeroAleatorio)) { // Verificar si el número generado no está ya en la tabla
                numerosTabla.push(numeroAleatorio); // Agregar el número a la tabla si no está presente
            }
        }
        tablasLoteria.push(numerosTabla); // Agregar la tabla generada al arreglo de tablas de lotería
    }

    return tablasLoteria; // Devolver el arreglo que contiene todas las tablas de lotería generadas
}


function permuteIceCreamFlavors(flavors) {
    if (flavors.length === 1) {
        return [flavors]; // Si solo hay un sabor, se devuelve un arreglo con ese sabor
    }

    const result = []; // Arreglo para almacenar las permutaciones de sabores

    for (let i = 0; i < flavors.length; i++) { // Recorrer cada sabor disponible
        const flavor = flavors[i]; // Seleccionar un sabor en particular
        const remainingFlavors = flavors.filter((_, index) => index !== i); // Filtrar los sabores restantes
        const partialPermutations = permuteIceCreamFlavors(remainingFlavors); // Llamada recursiva con los sabores restantes

        for (const partialPermutation of partialPermutations) {
            // Agregar la permutación actual (sabor + todas las permutaciones restantes) al resultado
            result.push([flavor, ...partialPermutation]);
        }
    }

    return result; // Devolver todas las combinaciones posibles de los sabores de helado
}


document.addEventListener("DOMContentLoaded", function() {
    // Se espera a que el DOM esté completamente cargado para ejecutar este código
    const exercismSelect = document.querySelector('select[name="exercism"]');
    const screenDiv = document.getElementById('screen');

    exercismSelect.addEventListener('change', function() {
        // Se agrega un evento de cambio al selector de ejercicios
        const selectedExercise = exercismSelect.value; // Obtiene el ejercicio seleccionado

        if (selectedExercise === "ejer1") {
            // Si se selecciona el ejercicio 1 (ejer1) - lotería
            const tablasLoteria = generarNumerosLoteria(); // Genera las tablas para la lotería
            const totalCombinaciones = tablasLoteria.length; // Calcula el número total de combinaciones generadas
            const ejercicioDescription = `Ejercicio 1: Dados 10 números, realizar las posibles combinaciones para 20 tablas de una lotería, cada tabla con 8 números. Total de combinaciones: ${totalCombinaciones}`;
            screenDiv.innerHTML = `<p>${ejercicioDescription}</p><pre>${JSON.stringify(tablasLoteria, null, 2)}</pre>`;
            // Muestra la descripción del ejercicio 1 y las combinaciones generadas en la pantalla
        } else if (selectedExercise === "ejer2") {
            // Si se selecciona el ejercicio 2 (ejer2) - sabores de helado
            const flavors = [Cream.Chocolate, Cream.Vainilla, Cream.Maracuya, Cream.Fresa]; // Define los sabores
            const permutations = permuteIceCreamFlavors(flavors); // Obtiene las permutaciones de sabores
            const totalCombinaciones = permutations.length; // Calcula el número total de combinaciones
            const ejercicioDescription = `Ejercicio 2: ¿De cuántas formas distintas puedes organizar los 4 sabores en un cono de helado? Total de combinaciones: ${totalCombinaciones}`;
            screenDiv.innerHTML = `<p>${ejercicioDescription}</p><pre>${JSON.stringify(permutations, null, 2)}</pre>`;
            // Muestra la descripción del ejercicio 2 y las permutaciones de sabores en la pantalla
        } else {
            screenDiv.innerHTML = ''; // Limpiar el contenido si no se selecciona un ejercicio
            // Borra el contenido en la pantalla si no se selecciona ningún ejercicio
        }
    });
});

const Cream = {
    Chocolate: "Chocolate",
    Vainilla: "Vainilla",
    Maracuya: "Maracuya",
    Fresa: "Fresa"
};

