function age(planet: string, seconds: number): number {
    const secEarth = 31557600;
     
    enum Equivalents {
        Mercury = 0.2408467,
        Venus = 0.61519726,
        Earth = 1.0,
        Mars = 1.8808158,
        Jupiter = 11.862615,
        Saturn = 29.447498,
        Uranus = 84.016846,
        Neptune = 164.79132
    }
  
    let ageT = 0;

    switch (planet.toLowerCase()) {
        case 'mercury':
            ageT = seconds / secEarth / Equivalents.Mercury;
            break;
        case 'venus':
            ageT = seconds / secEarth / Equivalents.Venus;
            break;
        case 'earth':
            ageT = seconds / secEarth / Equivalents.Earth;
            break;
        case 'mars':
            ageT = seconds / secEarth / Equivalents.Mars;
            break;
        case 'jupiter':
            ageT = seconds / secEarth / Equivalents.Jupiter;
            break;
        case 'saturn':
            ageT = seconds / secEarth / Equivalents.Saturn;
            break;
        case 'uranus':
            ageT = seconds / secEarth / Equivalents.Uranus;
            break;
        case 'neptune':
            ageT = seconds / secEarth / Equivalents.Neptune;
            break;
        default:
            throw new Error('Planet not found in the database');
    }

    // Redondear a dos decimales hacia arriba
    return Math.ceil(ageT * 100) / 100;
}

console.log(age('saturn', 2000000000))