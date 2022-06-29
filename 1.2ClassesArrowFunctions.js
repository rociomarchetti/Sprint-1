/* - Exercici 1
Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres. */

const arrowFunction = (num1, num2) => num1 + num2
console.log(arrowFunction(3, 7))

/* - Exercici 2
Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe. */

class Person {

    constructor(name) {
        this.name = name
    }

    printName(name) {
        console.log(name)
    }
}

newPerson = new Person()
newPerson.printName('Pepito')

/* - Exercici 1
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. 
Invoca-la amb diferents definicions. */

function createObject() {
    return new Object
}

const car = createObject()
car.color = 'rojo'
car.wheels = 4

console.log(car)