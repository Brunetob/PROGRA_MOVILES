
interface Animal {
    nombre: string;
    edad: number;
}

//Tipo de intersección
interface Employee{
    employeeID: number;
    age: number;
}
interface Manager{
    stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager; //Se arregla usando '&' y 'Manager'
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
}
//Tipo de literales
type testResult = "pass" | "fail" | "incomplete"
let myResult: testResult;
myResult = "incomplete";
myResult = "pass";
//myResult = "failure"

// Ejercicio en clase
// Mediante las interfaces ciudadanio y presidente crear un objeto de tipo intersección para describir al presidente de tu país
interface Citizen{
    citizenID: number,
    age: number
    name: string
}
interface President {
    residence: string,
    capacitations: string
}
type PresidentCitizen = Citizen & President;
let newPresident: PresidentCitizen = {
    citizenID: 107425761,
    age: 35,
    name: 'Daniel',
    residence: 'Palacio de Carondolet',
    capacitations: 'Dirigir' 
}

// Ejercicio en clases dos
// Mediante las interfaces ciudad y capital crear un objeto de tipo intersección para describir a la capital de tu provincia
// Además, que una propiedad de la interfaz ciudad sea un tipo literal donde indica el nivel de delicuencia (baja, alta, media)
console.log("********************** EJERCICIO 2 **********************");
interface City {
    cityPoblation: number;
    fundationYear: number;
    name: string;
    delicuence: "baja" | "media" | "alta";
}

interface Capital {
    surfaceArea: string;
    altitude: string;
}

type CapitalCity = City & Capital;

let newCapital: CapitalCity = {
    cityPoblation: 661685,
    fundationYear: 1577,
    name: 'Cuenca',
    delicuence: "baja", // Debes asignar un valor de "baja", "media" o "alta"
    surfaceArea: "70.59 km²", // Cambié la coma a un punto
    altitude: "2,560 m", // Cambié la coma a un punto
};

/*********ARRAYS TUAPLAS***************/
//array -  se pueden declarar de dos formas
let list: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]
//tuplas
let person1: [string, number, Boolean] = ['Marcia', 35, true]; //El orden debe segir como en la asignación puesta en la sintaxis

//****Ejercicio en clases 3*******
//Modifique el código para agrega tipos a las declaraciones de variable. Cuando haya terminado el código de javascript compilado, debe tener el mismo aspecto que en el original

/*JAVASCRIPT
let firstName;
let lastName;
let fullName;
let age;
let ukCitizen;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}*/
//TYPESCRIPT
console.log("********************** EJERCICIO 3 **********************");
let firstName: string;
let lastName: string;
let fullName: string;
let age: number;
let ukCitizen: boolean;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}

//****Ejercicio en clases 4*******
//aRREGLE EL CÓDIGO ARA QUE EL RESULTADO SEA 12
console.log("********************** EJERCICIO 4 **********************");
let x = 5;
let y = 7;
let a: number;
a = x + y;
console.log(a);

//****Ejercicio en clases 5*******
//Implemente un tipo enum denominado Season que represente las constantes "Fall", "Winter", "Spring" y "Summer".
//Actualice la función para que pueda pasar la temporada haciendo referencia a un elemento en enum, por ejemplo: Season.Fall en lugar de la cadena literal "Fall"
console.log("********************** EJERCICIO 5 **********************");
/*function whichMonths(season){
    let monthsInSeason: string;
    switch (season) {
        case "Fall":
            monthsInSeason = "September to November";
            break;
        case "Winter":
            monthsInSeason = "December to February";
            break;
        case "Spring":
            monthsInSeason = "March to May";
            break;
        case "Summer":
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}
console.log(whichMonths("Fall"));*/

// Define el enum Season
enum Season {// Punto extra es el número 8
    Fall,
    Winter,
    Spring,
    Summer,
}

function whichMonths(season: Season) {
    let monthsInSeason: string;
    switch (season) {
        case Season.Fall:
            monthsInSeason = "September to November";
            break;
        case Season.Winter:
            monthsInSeason = "December to February";
            break;
        case Season.Spring:
            monthsInSeason = "March to May";
            break;
        case Season.Summer:
            monthsInSeason = "June to August";
            break;
    }
    return monthsInSeason;
}

console.log(whichMonths(Season.Fall));

console.log("******************************Segundo ejercicio Exercism******************************");

function twoFer(name: string){
    let named:string = name;
    let msgMain = "One for " + named+ ", one for me.";
    let msgSecond = "One for you, one for me";

    if(named !== null && named !== "" && named !== " "){
        return msgMain;
    }else{
        return msgSecond;
    }
}

console.log(twoFer(""));