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

/* - Exercici 1
Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla
el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary()
que has definit a la tasca anterior. */

//FUNCIONES YA CREADAS (INICIO) 

const getEmployee = (valueID) => {

    return new Promise((resolve, reject) => {

        if (employees.find(employee => employee.id === valueID)) {
            const choosedEmployee = employees.find(employee => employee.id === valueID)
            resolve(choosedEmployee)
        } else {
            reject('error')
        }
    })
}

const getSalary = (valueID) => {

    return new Promise((resolve, reject) => {
        if (salaries.find(salary => salary.id === valueID)) {
            const thatEmployee = salaries.find(salary => salary.id === valueID)
            resolve(thatEmployee)
        } else {
            reject('error') 
        }
    })
}

//FUNCIONES YA CREADAS (FIN)

async function getEmployeeData(valueID) {
    const choosedEmployee = await getEmployee(valueID)
        .then(choosedEmployee => console.log(`Nombre: ${choosedEmployee.name}`))
        .catch(error => console.log('error'))

    const thatEmployee = await getSalary(valueID)
        .then(thatEmployee => console.log(`Salario: ${thatEmployee.salary}`))
        .catch(error => console.log('error'))

}

getEmployeeData(1)

/* - Exercici 2
Crea una nova funció asíncrona que cridi a una altra que retorni
una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació. */

function firstPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(console.log('La primer promesa fue completada'))
        }, 2000)
    })
}

async function testPromise() {
    const result = await firstPromise()
    return result
}

testPromise()

/* - Exercici 1
Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior. */

function double(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value * 2)
        }, 2000)
    })
}

async function addition(num1, num2, num3) {
    const firstNumber = await double(num1)
    const secondNumber = await double(num2)
    const thirdNumber = await double(num3)
    const additionResult = firstNumber + secondNumber + thirdNumber
    return additionResult
}

addition(3, 7, 9)
    .then(result => console.log(result))

/* - Exercici 1
Força i captura tants errors com puguis dels nivells 1 i 2. */

getEmployee(4).catch(error => console.log('El id ingresado no se corresponde con un empleado'))
getEmployee(-1).catch(error => console.log('El id ingresado no se corresponde con un empleado'))
getEmployee(null).catch(error => console.log('El id ingresado no se corresponde con un empleado'))
getEmployee(NaN).catch(error => console.log('El id ingresado no se corresponde con un empleado'))
getSalary(4).catch(error => console.log('El id ingresado no se corresponde con un salario'))
getSalary(-1).catch(error => console.log('El id ingresado no se corresponde con un salario'))
getSalary(null).catch(error => console.log('El id ingresado no se corresponde con un salario'))
getSalary(NaN).catch(error => console.log('El id ingresado no se corresponde con un salario'))



