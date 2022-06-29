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
    const message = `Nombre nuevo usuario: ${name}. Apellido nuevo usuario: ${surname}`
    return message
}

const newMessage = newUserData('Agustina', 'Fernández')
console.log(newMessage)

/* - Exercici 1
Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti 
del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. 
Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades. */

const functionsList = []

for (let i = 0; i < 10; i++) {

i => console.log(i)
functionsList.push(i)

}

console.log(functionsList)

/* - Exercici 2
Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de 
l'usuari/ària a rebut com a paràmetre. */

const userName = itsName => console.log(itsName)
userName('María')