/*
 * Viernes 27/10/2023
 * Evalacuión parte dos - ejercicio exercism (Color duo)
 */
function decodedValue(colors: string[]): number {

    enum ColorMap{
        'black' = 0,
        'brown' = 1,
        'red'= 2,
        'orange' = 3,
        'yellow' = 4,
        'green' = 5,
        'blue' = 6,
        'violet'= 7,
        'grey' = 8,
        'white' = 9
    }
    /*const colorMap: Record<string, number> = {
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
    };*/
  
    let firstColor = colors[0];
    let secondColor = colors[1];

    let value = ColorMap[firstColor] * 10 + ColorMap[secondColor];

    return value;
}

console.log(decodedValue(["red", "white", "grey"]));