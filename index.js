import { mainInput, input2, restar } from './constantes.js'

let enteredNumbers = []
let secondEnteredNumbers = []
let operation = []

export function agregarNumero(e) {
    if(operation.some(el => el === "-" || "+" || "*" || "/")) {
        secondEnteredNumbers.push(e.target.value)
        let total = secondEnteredNumbers.join('')
        mainInput.value = total 
    } else if(operation) {
        enteredNumbers.push(e.target.value)
        let numbersToCalculate = enteredNumbers.join('')
        mainInput.value = numbersToCalculate
    }
    return enteredNumbers
}

export function agregarOperacion(e) {
    operation.push(e.target.value)
    if(enteredNumbers.length !== 0 ) {
        let enteredOperation = enteredNumbers.concat(operation)
        let numbersToCalculate = enteredOperation.join('')
        input2.value = numbersToCalculate
        mainInput.value = secondEnteredNumbers.join('')
    }
    return enteredNumbers
}

export function calcular() {
    let firstNumbers = enteredNumbers.join('')
    let secondNumbers = secondEnteredNumbers.join('')
    let firstParam = parseInt(secondNumbers)
    let secondParam = parseInt(firstNumbers)
    if(operation[0] === '+') {
        let total = firstParam + secondParam
        mainInput.value = total
        input2.value = secondParam + operation[0] + firstParam + '='
        restart()
        enteredNumbers.push(total)
    } else if(operation[0] === '-') {
        let total = secondParam - firstParam
        mainInput.value = total
        input2.value = secondParam + operation[0] + firstParam + '='
        restart()
        enteredNumbers.push(total)
    } else if(operation[0] === '*') {
        let total = secondParam * firstParam
        mainInput.value = total
        input2.value = secondParam + operation[0] + firstParam + '='
        restart()
        enteredNumbers.push(total)
    } else if(operation[0] === '/') {
        let total = secondParam / firstParam
        mainInput.value = total
        input2.value = secondParam + operation[0] + firstParam + '='
        restart()
        enteredNumbers.push(total)
    }
}

function restart() {
    enteredNumbers.length = 0;
    operation.length = 0;
    secondEnteredNumbers.length = 0;
}
