//NIVEL 1

/* - Exercici 1
Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres. */

/* const arrowFunction = (num1, num2) => num1 + num2
console.log(arrowFunction(3, 7)) */

((num1, num2) => console.log(num1 + num2))(3, 7)

//NIVEL 2

/* - Exercici 1
Crea una arrow function que, rebent un paràmetre, retorni un objecte 
amb un atribut que tingui com a valor el paràmetre rebut. */

const carColor = (color) => {
    const car = { car: color }
    return car
}

console.log(carColor('rojo'))

/* - Exercici 2
Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe. */

/* class Person {

    constructor(name) {
        this.name = name
    }

    printName(name) {
        console.log(name)
    }
}

newPerson = new Person()
newPerson.printName('Pepito') */

class Person {

    constructor(name) {
        this.name = name
    }

    printName() {
        console.log(this.name)
    }
}

newPerson = new Person('Pepito')
newPerson.printName()

//NIVEL 3

/* - Exercici 1
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. 
Invoca-la amb diferents definicions. */

/* function createObject() {
    return new Object
}

const car = createObject()
car.color = 'rojo'
car.wheels = 4

console.log(car) */

class Thing {

    constructor() {
        if (this.constructor === Thing) {
            throw new Error('That cant be a thing')
        }
    }

    sayThings() {
        throw new Error('Las cosas no hablan!')
    }

    doThings() {
        console.log('Its my thing!')
    }

}

class Moco extends Thing {
    sayThings() {
        console.log('Hello Moco')
    }
}



new Moco().doThings()
new Moco().sayThings()

new Thing()
new Thing().sayThings()