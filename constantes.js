import { calcular, agregarNumero, agregarOperacion } from './index.js'

export const mainInput = document.querySelector('#input')
export const input2 = document.querySelector('#input2')

export const uno = document.querySelector('#uno').addEventListener('click', agregarNumero)
export const dos = document.querySelector('#dos').addEventListener('click', agregarNumero)
export const tres = document.querySelector('#tres').addEventListener('click', agregarNumero)
export const cuatro = document.querySelector('#cuatro').addEventListener('click', agregarNumero)
export const cinco = document.querySelector('#cinco').addEventListener('click', agregarNumero)
export const seis = document.querySelector('#seis').addEventListener('click', agregarNumero)
export const siete = document.querySelector('#siete').addEventListener('click', agregarNumero)
export const ocho = document.querySelector('#ocho').addEventListener('click', agregarNumero)
export const nueve = document.querySelector('#nueve').addEventListener('click', agregarNumero)
export const cero = document.querySelector('#cero').addEventListener('click', agregarNumero)

export const sumar = document.querySelector('#sumar').addEventListener('click', agregarOperacion)
export const restar = document.querySelector('#restar').addEventListener('click', agregarOperacion)
export const dividir = document.querySelector('#dividir').addEventListener('click', agregarOperacion)
export const multiplicar = document.querySelector('#multiplicar').addEventListener('click', agregarOperacion)

export const igual = document.querySelector('#igual').addEventListener('click', calcular)