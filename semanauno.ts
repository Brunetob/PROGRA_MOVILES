let list: number [] = [1,2,3];
let lists: Array<number> = [1,2,3];
//tupla
let person1: [string, number] = [35, 'Marcia', true] //debe seguir el orden de los tipos declarados y la cantidad
let persona1: [string, number] = ['Marcia', 35]
//semana tres
//INTERFACES
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}