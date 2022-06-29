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

//FUNCIONES YA CREADAS

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
//////////////////////////////////////////////////

async function getEmployeeData(valueID) {
    const employeeName = await getEmployee(valueID)
    const employeeIncome = await getSalary(employees[valueID])
}

let valueID = 1
getEmployeeData(valueID)

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
    const result = Number(value * 2)
    return setTimeout(() => {
        result
        console.log(result)
    }, 2000)
}

function addition(num1, num2, num3) {
    const firstNumber = double(num1)
    const secondNumber = double(num2)
    const thirdNumber = double(num3)
    const additionResult = firstNumber + secondNumber + thirdNumber
    console.log(additionResult)
}

addition(3, 7, 9)

