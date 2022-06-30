/* - Exercici 1
Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre. */

function printName(name) {
    console.log(name)
}

printName('Pepe')

/* - Exercici 1
Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables 
i referenciant-les en la impressió del missatge. */

function printUserData(name, surname) {
    const userName = name
    const userSurname = surname
    const userData = `Nombre: ${userName}. Apellido: ${userSurname}`
    console.log(userData)
}

printUserData('Lola', 'Gómez')

/* - Exercici 2
Invoca una funció que retorni un valor des de dins d'una template literal.  */

function newUserData(name, surname) {
    const message = `Nombre: ${name}. Apellido: ${surname}`
    return message
}

const newMessage = `Nuevo usuario : ${newUserData('Agustina', 'Fernández')}`
console.log(newMessage)

/* - Exercici 1
Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti 
del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. 
Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades. */

const functionsList = []

function printNumbers() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}

for (let i = 0; i < 10; i++) {
    functionsList.push(printNumbers)
}

console.log(functionsList)

for (element in functionsList) {
    printNumbers()
}

/* - Exercici 2
Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de 
l'usuari/ària a rebut com a paràmetre. */

const userName = (function (name) {
    const printedName = console.log(name)
    return printedName
})('María')