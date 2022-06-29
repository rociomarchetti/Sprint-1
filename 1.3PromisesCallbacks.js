/* - Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no. */

const hasWon = true

const game = new Promise((resolve, reject) => {
    if (hasWon) {
        const winnerMessage = 'Has ganado!'
        resolve(winnerMessage)
    } else {
        const playerMessage = 'Aún no lo consigues, deberás continuar intentándolo!'
        reject(playerMessage)
    }

})

const checkWinner = () => {
    game
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(err)
        })
}

checkWinner()

/* - Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback i li 
passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */

function printResult(result) {
    console.log(result)
}

const messageResult = (a, printResult) => {

    if (!a) {
        const result = 'NO'
        printResult(result)
    } else {
        const result = 'SÍ'
        printResult(result)
    }
}

const a = true
messageResult(a, printResult)

/* - Exercici 1
Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise 
efectuant la cerca en l'objecte pel seu id. */

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmployee = valueID => {

    const employeeInfo = new Promise((resolve, reject) => {
        if (employees.find(employee => employee.id === valueID)) {
            const choosedEmployee = employees.find(employee => employee.id === valueID)
            const employeeData = `El nombre de ese empleado es: ${choosedEmployee.name}`
            resolve(employeeData)
        } else {
            const error = 'No hemos encontrado a ese empleado'
            reject(error)
        }
    })

    employeeInfo
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(err)
        })

    return employeeInfo
}

getEmployee(2)

/* - Exercici 2
Crea una altra arrow function getSalary() similar a l'anterior 
que rebi com a paràmetre un objecte employee i retorni el seu salari. */

const getSalary = employeeObject => {

    const employeeSalary = new Promise((resolve, reject) => {
        if (employees.includes(employeeObject)) {
            const thatEmployee = employees.indexOf(employeeObject)
            const thatEmployeeSalary = `El salario de ese empleado es ${salaries[thatEmployee].salary}`
            resolve(thatEmployeeSalary)
        } else {
            const errorMessage = 'No hemos encontrado a ese empleado'
            reject(errorMessage)
        }
    })

    employeeSalary
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(err)
        })

    return employeeSalary
}

getSalary(employees[2])

/* - Exercici 3
Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises 
de manera que es retorni per la consola el nom de l'empleat/da i el seu salari. */

let valueID = 1
getEmployee(valueID)
    .then(getSalary(employees[valueID]))
    .catch((error) => {
        console.log(error)
    })




