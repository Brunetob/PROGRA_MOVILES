// Espera a que el documento HTML se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
  // Obtén una referencia al elemento select
  var selectElement = document.querySelector('select[name="exercism"]');
  // Obtén una referencia al elemento div donde mostrarás la información
  var screenElement = document.getElementById('screen');
  
  // Agrega un evento para detectar cambios en el select
  selectElement.addEventListener('change', function() {
    // Obtiene el valor seleccionado en el select
    var selectedValue = selectElement.value;
    
    // Lógica para mostrar información según la selección
    if (selectedValue === 'ejer1') {
      screenElement.textContent = 'El ejercicio de Lotería trata sobre perutacion con repeticion la que se basa en ';
    } else if (selectedValue === 'ejer2') {
      screenElement.textContent = 'El ejercicio de Helado trata combinacion sin repeticion la que se basa en saber ¿De cuántas formas distintas puedes organizar los 4 sabores "Chocolate", "Maracuya", "Vainilla", "Menta" en un cono de helado? ';
      const Cream = {
        Chocolate: "Chocolate",
        Vainilla: "Vainilla",
        Maracuya: "Maracuya",
        Fresa: "Fresa"
    };
    
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
    
    const flavors = [Cream.Chocolate, Cream.Vainilla, Cream.Maracuya, Cream.Fresa];
    const permutations = permuteIceCreamFlavors(flavors);
    
    console.log("Permutaciones de sabores de helado:", permutations);
    }
  });
});


