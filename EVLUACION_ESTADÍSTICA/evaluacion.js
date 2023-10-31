function generarNumerosLoteria() {
    const cantidadNumeros = 8; // Corregido: Debe ser 8 números para la lotería
    const rangoNumeros = 50;
    const tablasLoteria = [];

    for (let i = 0; i < 20; i++) { // Generar 20 tablas
        const numerosTabla = [];
        while (numerosTabla.length < cantidadNumeros) {
            const numeroAleatorio = Math.floor(Math.random() * rangoNumeros) + 1;
            if (!numerosTabla.includes(numeroAleatorio)) {
                numerosTabla.push(numeroAleatorio);
            }
        }
        tablasLoteria.push(numerosTabla);
    }

    return tablasLoteria;
}

function permuteIceCreamFlavors(flavors) {
    if (flavors.length === 1) {
        return [flavors];
    }

    const result = [];

    for (let i = 0; i < flavors.length; i++) {
        const flavor = flavors[i];
        const remainingFlavors = flavors.filter((_, index) => index !== i);
        const partialPermutations = permuteIceCreamFlavors(remainingFlavors);

        for (const partialPermutation of partialPermutations) {
            result.push([flavor, ...partialPermutation]);
        }
    }

    return result;
}

document.addEventListener("DOMContentLoaded", function() {
    const exercismSelect = document.querySelector('select[name="exercism"]');
    const screenDiv = document.getElementById('screen');

    exercismSelect.addEventListener('change', function() {
        const selectedExercise = exercismSelect.value;

        if (selectedExercise === "ejer1") {
            const tablasLoteria = generarNumerosLoteria();
            const totalCombinaciones = tablasLoteria.length;
            const ejercicioDescription = `Ejercicio 1: Dados 5 números, realizar las posibles combinaciones para 20 tablas de una lotería, cada tabla con 8 números. Total de combinaciones: ${totalCombinaciones}`;
            screenDiv.innerHTML = `<p>${ejercicioDescription}</p><pre>${JSON.stringify(tablasLoteria, null, 2)}</pre>`;
        } else if (selectedExercise === "ejer2") {
            const flavors = [Cream.Chocolate, Cream.Vainilla, Cream.Maracuya, Cream.Fresa];
            const permutations = permuteIceCreamFlavors(flavors);
            const totalCombinaciones = permutations.length;
            const ejercicioDescription = `Ejercicio 2: ¿De cuántas formas distintas puedes organizar los 4 sabores en un cono de helado? Total de combinaciones: ${totalCombinaciones}`;
            screenDiv.innerHTML = `<p>${ejercicioDescription}</p><pre>${JSON.stringify(permutations, null, 2)}</pre>`;
        } else {
            screenDiv.innerHTML = ''; // Limpiar el contenido si no se selecciona un ejercicio
        }
    });
});

const Cream = {
    Chocolate: "Chocolate",
    Vainilla: "Vainilla",
    Maracuya: "Maracuya",
    Fresa: "Fresa"
};
