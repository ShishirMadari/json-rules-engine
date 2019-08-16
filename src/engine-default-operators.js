'use strict'

import Operator from './operator'

let Operators = []
Operators.push(new Operator('equal', (a, b) => a === b))
Operators.push(new Operator('notEqual', (a, b) => a !== b))
Operators.push(new Operator('in', (a, b) => b.indexOf(a) > -1))
Operators.push(new Operator('notIn', (a, b) => b.indexOf(a) === -1))

Operators.push(new Operator('contains', (a, b) => a.indexOf(b) > -1, Array.isArray))
Operators.push(new Operator('doesNotContain', (a, b) => a.indexOf(b) === -1, Array.isArray))

const containsOnly = (a, b) => {
  const test = {}

  b.forEach(element => { test[element] = true })

  for (let element of a)
    if (!test[element]) return false

  return true
}

Operators.push(new Operator('containsOnly', containsOnly, Array.isArray))

const everyEquals = (a, b) => {
  for (let element of a)
    if (b !== element) return false

  return true
}

Operators.push(new Operator('everyEquals', everyEquals, Array.isArray))

function numberValidator (factValue) {
  return Number.parseFloat(factValue).toString() !== 'NaN'
}
Operators.push(new Operator('lessThan', (a, b) => a < b, numberValidator))
Operators.push(new Operator('lessThanInclusive', (a, b) => a <= b, numberValidator))
Operators.push(new Operator('greaterThan', (a, b) => a > b, numberValidator))
Operators.push(new Operator('greaterThanInclusive', (a, b) => a >= b, numberValidator))

export default Operators
